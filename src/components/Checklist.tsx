import { useState, useEffect } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

interface ChecklistProps {
    items: string[];
    sectionId: string;
    lang: string;
}

export default function Checklist({ items, sectionId, lang }: ChecklistProps) {
    const storageKey = `checklist-${lang}-${sectionId}`;
    const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

    // Load from localStorage on mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                const parsed = JSON.parse(saved);
                setCheckedItems(new Set(parsed));
            }
        } catch (error) {
            console.error('Error loading checklist:', error);
        }
    }, [storageKey]);

    // Save to localStorage whenever checkedItems changes
    useEffect(() => {
        try {
            localStorage.setItem(storageKey, JSON.stringify(Array.from(checkedItems)));
        } catch (error) {
            console.error('Error saving checklist:', error);
        }
    }, [checkedItems, storageKey]);

    const toggleItem = (index: number) => {
        setCheckedItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    const progress = items.length > 0 ? (checkedItems.size / items.length) * 100 : 0;

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-lg text-brand-dark">
                        {lang === 'en' ? 'Checklist' : lang === 'es' ? 'Lista de Verificación' : 'Checkliste'}
                    </h4>
                    <span className="text-sm text-gray-600">
                        {checkedItems.size}/{items.length}
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-brand-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <ul className="space-y-3">
                {items.map((item, index) => {
                    const isChecked = checkedItems.has(index);
                    return (
                        <li key={index}>
                            <button
                                onClick={() => toggleItem(index)}
                                className="flex items-start gap-3 w-full text-left hover:bg-gray-50 p-2 rounded transition-colors"
                            >
                                {isChecked ? (
                                    <CheckCircle2 className="text-brand-primary flex-shrink-0 mt-0.5" size={20} />
                                ) : (
                                    <Circle className="text-gray-400 flex-shrink-0 mt-0.5" size={20} />
                                )}
                                <span className={`${isChecked ? 'line-through text-gray-500' : 'text-brand-dark'}`}>
                                    {item}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
