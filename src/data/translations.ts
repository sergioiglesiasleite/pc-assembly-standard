const en = {
        siteName: "PC Assembly Field Guide",
        tagline: "A practical, multilingual guide to assembling and preparing a desktop PC.",
        ui: {
            navigationLabel: "Guide navigation",
            languageLabel: "Choose language",
            skipLink: "Skip to content",
            openGuide: "Start the guide",
            heroAlt: "Desktop PC being assembled on a workbench",
            aboutTitle: "About this project",
            aboutBody: "I created this independent portfolio project from my hands-on experience assembling desktop PCs. It shows how I turn hardware procedures into clear training material for first-time builders and junior technicians.",
            independent: "Independent portfolio project. Not affiliated with or endorsed by any previous employer.",
            technologiesTitle: "Built with",
            sourcesTitle: "Technical sources",
            sourcesIntro: "This short guide complements the manuals for your motherboard, case, power supply and cooler. Consult those manuals for model-specific steps.",
            reviewedLabel: "Technical content reviewed",
            checklistTitle: "Checklist",
            progressLabel: "Section progress",
            resetLabel: "Reset progress",
            resetConfirm: "Reset the progress for this section?",
            footer: "An independent guide to PC assembly and technical documentation."
        },
        navigation: {
            prep: "Prep & Safety",
            hardware: "Hardware Assembly",
            cabling: "Cabling",
            boot: "First Boot & Troubleshooting",
            os: "OS & Deployment"
        },
        sections: {
            prep: {
                title: "Preparation & Safety",
                tools: {
                    title: "Required Tools",
                    items: [
                        "Phillips head screwdriver (magnetic tip recommended)",
                        "Cable ties / Velcro straps",
                        "Thermal paste (if not pre-applied)",
                        "Anti-static wrist strap (ESD protection)"
                    ]
                },
                safety: {
                    title: "Safety Precautions",
                    items: [
                        "Work on a non-conductive surface (wood table, anti-static mat)",
                        "Disconnect mains power before installing or reseating components. Use an ESD wrist strap according to its instructions or regularly touch an unpainted metal part of the case",
                        "Avoid working on carpet",
                        "Keep liquids away from workspace",
                        "Handle components by edges, avoid touching pins or contacts"
                    ]
                },
                checklist: [
                    "All tools gathered",
                    "Workspace prepared (clean, non-conductive)",
                    "ESD protection in place",
                    "Component boxes opened and inventoried"
                ]
            },
            hardware: {
                title: "Hardware Assembly",
                beginner: {
                    title: "🔰 For Beginners: What Are These Components?",
                    items: [
                        "**CPU (Central Processing Unit)**: The 'brain' of your computer. Handles all calculations and instructions.",
                        "**RAM (Random Access Memory)**: Temporary 'workspace' for active programs. More RAM = more programs running smoothly at once.",
                        "**Motherboard**: The 'nervous system' connecting all components together.",
                        "**GPU (Graphics Processing Unit)**: Handles graphics and display. Essential for gaming or video editing."
                    ]
                },
                cpu: {
                    title: "CPU & Cooler Installation",
                    warning: "⚠️ CRITICAL: Remove plastic protective cover from CPU cooler base before installation!",
                    steps: [
                        "Open motherboard CPU socket (lift retention arm)",
                        "Align CPU with socket notches (golden triangle indicator)",
                        "Gently place CPU - do NOT force",
                        "Lower retention arm to secure",
                        "If paste is not pre-applied, add the amount and pattern specified by the cooler or paste manufacturer",
                        "Install CPU cooler according to manufacturer instructions",
                        "Connect CPU fan cable to motherboard CPU_FAN header (usually near CPU socket)"
                    ],
                    image: {
                        src: "/images/cpu/cpu-installation.webp",
                        alt: "CPU Installation Guide",
                        caption: "CPU Installation - Align golden triangle indicator"
                    }
                },
                ram: {
                    title: "RAM Installation",
                    explanation: "💡 **Why A2/B2 slots?** Many boards recommend these slots when fitting two DIMMs. Check your motherboard manual: the preferred slots vary by model. Dual-channel increases available memory bandwidth, but application performance gains vary.",
                    steps: [
                        "Check motherboard manual for correct DIMM slots (usually A2/B2 for dual-channel)",
                        "Open retention clips on both sides of slot",
                        "Align RAM notch with slot key",
                        "Press firmly until clips snap into place",
                        "Verify both clips are locked - RAM should not move"
                    ],
                    image: {
                        src: "/images/ram/ram-installation.webp",
                        alt: "RAM Installation Guide",
                        caption: "Example RAM placement: verify the preferred slots in your motherboard manual"
                    }
                },
                case: {
                    title: "Installing Motherboard into Case",
                    steps: [
                        "Fit the I/O shield if your motherboard does not have one integrated",
                        "Install motherboard standoffs matching your board size (ATX/mATX/ITX)",
                        "Carefully place motherboard, aligning with I/O shield and standoffs",
                        "Secure with screws - do not overtighten",
                        "Install GPU if applicable (remove PCIe slot covers first)"
                    ],
                    image: {
                        src: "/images/motherboard/overview.svg",
                        alt: "Schematic outline of a motherboard and its main component areas",
                        caption: "Schematic only: positions differ by motherboard model"
                    }
                },
                checklist: [
                    "CPU installed correctly",
                    "Thermal paste present (pre-applied or added according to cooler instructions)",
                    "Cooler plastic cover REMOVED",
                    "CPU fan connected",
                    "RAM seated in the slots recommended by the motherboard manual",
                    "Motherboard secured with all standoffs",
                    "GPU installed (if applicable)"
                ]
            },
            cabling: {
                title: "Cabling (The Hard Part)",
                frontPanel: {
                    title: "Front Panel Connectors (F_PANEL)",
                    warning: "⚠️ Check your motherboard manual for exact pin layout! This is the #1 thing people get wrong.",
                    explanation: "💡 **Power/Reset switches have NO polarity** - they work either way. **LEDs DO have polarity** (+/-) - if they don't light up, flip the connector 180°.",
                    connectors: [
                        "Power SW (Power button) - Usually 2-pin",
                        "Reset SW (Reset button) - Usually 2-pin",
                        "HDD LED (Hard drive activity light) - Usually 2-pin, polarity matters (+/-)",
                        "Power LED (+/-) - Usually 2-pin, polarity matters",
                        "USB 3.0 header (19-pin keyed connector)",
                        "USB 2.0 headers (9-pin)",
                        "HD Audio (AC'97 or HDA connector)"
                    ],
                    image: {
                        src: "/images/cables/front-panel.svg",
                        alt: "Schematic of front-panel switches and an LED without a pin map",
                        caption: "Connector concept only: use the board manual for the actual pinout"
                    }
                },
                power: {
                    title: "Power Supply Cables",
                    cables: [
                        "24-pin ATX Main Power (largest connector, goes to motherboard)",
                        "8-pin (4+4) CPU Power (Splits in half! Do not mistake for GPU cable)",
                        "GPU power may use 6-pin, 8-pin (6+2), 12VHPWR or the newer 12V-2x6 connector. Follow the GPU and PSU manuals; use separate PCIe cables where required.",
                        "Fully seat every GPU power plug. Avoid sharp bends or sideways strain close to a high-power connector.",
                        "Never reuse modular PSU cables from another unit unless the PSU manufacturer explicitly confirms compatibility for the exact models.",
                        "SATA power for storage drives",
                        "Fan connectors to motherboard headers"
                    ],
                    image: {
                        src: "/images/cables/gpu-power-types.svg",
                        alt: "Schematic 6-pin, 8-pin and 12-plus-4 GPU power connectors",
                        caption: "Connector families: confirm the exact GPU and PSU requirements"
                    }
                },
                fans: {
                    title: "Cooling & Fans",
                    headers: [
                        "**CPU_FAN**: Connect the CPU cooler fan here unless the cooler and motherboard manuals specify another arrangement; some boards warn or halt when no fan signal is detected.",
                        "**AIO_PUMP**: Intended for compatible liquid-cooling pumps; verify the connector, current rating and speed setting in both manuals.",
                        "**SYS_FAN / CHA_FAN**: For case fans. Speed can be controlled in BIOS."
                    ],
                    pwm: "**4-Pin PWM vs 3-Pin DC**: 4-pin fans allow precise speed control (PWM). 3-pin fans run at voltage-controlled speeds (less precise). Both fit in 4-pin headers (keyed tab ensures correct alignment).",
                    image: {
                        src: "/images/cables/fan-headers.webp",
                        alt: "PWM vs DC Fan Headers",
                        caption: "Four-pin PWM and three-pin DC fan connectors; check your board manual"
                    }
                },
                rgb: {
                    title: "RGB Lighting (DANGER ZONE)",
                    warning: "⚠️ DO NOT MIX 5V AND 12V RGB! YOU WILL BURN YOUR LEDS.",
                    types: [
                        "**5V ARGB (Addressable)**: 3-pins with a gap [Pin][Pin][Gap][Pin]. Digital, individual LED control. Connect ONLY to 5V headers.",
                        "**12V RGB (Standard)**: 4-pins [Pin][Pin][Pin][Pin]. Analog, whole strip changes color. Connect ONLY to 12V headers."
                    ],
                    image: {
                        src: "/images/cables/rgb-headers.webp",
                        alt: "5V ARGB vs 12V RGB Headers",
                        caption: "Never connect a 5V ARGB device to a 12V RGB header"
                    }
                },
                management: {
                    title: "Pro Tip: Cable Management",
                    explanation: "💡 Good cable management isn't just for looks - it significantly improves airflow and makes future upgrades easier.",
                    tips: [
                        "Route cables behind motherboard tray when possible",
                        "Use cable ties to bundle and secure cables",
                        "Keep cables away from fan blades",
                        "Good cable management improves airflow and aesthetics"
                    ],
                    image: {
                        src: "/images/cables/cable-management.webp",
                        alt: "Cable Management Example",
                        caption: "Good Cable Management Example"
                    }
                },
                checklist: [
                    "24-pin ATX power connected",
                    "8-pin CPU power connected",
                    "GPU power connected (if applicable)",
                    "Front panel connectors installed (Power, Reset, LED)",
                    "USB headers connected",
                    "Audio header connected",
                    "Storage installed; SATA drives powered and connected where applicable",
                    "Cables managed and secured"
                ]
            },
            boot: {
                title: "First Boot & Troubleshooting",
                firstBoot: {
                    title: "Initial Power-On",
                    steps: [
                        "Double-check all power connections",
                        "Connect the monitor to the video output intended for this build; usually the discrete GPU when one is installed",
                        "Turn on PSU switch",
                        "Press power button",
                        "Watch for POST (Power-On Self Test) - LEDs, fans spinning"
                    ]
                },
                troubleshooting: {
                    title: "Common Issues",
                    noVideo: {
                        title: "No Video Output",
                        solutions: [
                            "Check monitor cable is in GPU port, not motherboard (if GPU installed)",
                            "Verify monitor is powered on and set to correct input",
                            "Power off and unplug the PC before reseating the GPU or its power cables",
                            "Perform Clear CMOS (Reset BIOS settings)",
                            "**Check Motherboard Debug LEDs/Codes**: Look for 'VGA' light or Q-Code number (check manual for code meaning)."
                        ]
                    },
                    noPost: {
                        title: "No POST / Won't Turn On",
                        solutions: [
                            "**CHECK PSU SWITCH!** Ensure it is set to 'I' (ON), not 'O' (OFF).",
                            "Check 24-pin and 8-pin CPU power fully seated",
                            "Verify front panel Power SW connector is correct",
                            "Check for motherboard standoff shorts",
                            "**Check Debug LEDs/Codes**: Look for Q-Code number if available."
                        ]
                    },
                    cmos: {
                        title: "How to Clear CMOS (Reset BIOS)",
                        steps: [
                            "Power off the PC, switch off the PSU and unplug its mains cable. Consult the motherboard manual before touching any jumper.",
                            "Use the board's Clear CMOS button or the specified jumper pins exactly as its manual instructs; never short unidentified pins.",
                            "If the manual permits battery removal instead, remove and reinstall it following the board instructions and correct polarity.",
                            "Reconnect power and start the PC. Check the firmware settings: clearing CMOS may reset boot order and memory profiles."
                        ],
                        image: {
                            src: "/images/bios/clear-cmos.svg",
                            alt: "Schematic reminder to disconnect power and consult the motherboard manual before clearing CMOS",
                            caption: "Conceptual illustration: do not infer a jumper location from this image"
                        }
                    }
                },
                bios: {
                    title: "BIOS Configuration (Essential Settings)",
                    explanation: "💡 **BIOS (Basic Input/Output System)** is the firmware that initializes hardware before Windows loads. Modern systems use UEFI BIOS.",
                    steps: [
                        "Press DEL or F2 during boot to enter BIOS (watch splash screen for key)",
                        "Navigate to Memory/Overclocking section",
                        "Optionally enable a supported XMP/EXPO memory profile after confirming compatibility and stability",
                        "Set boot mode to UEFI (required for Windows 11)",
                        "Set boot order (USB first for Windows installation, then your SSD/HDD)",
                        "Optional: Enable virtualization (VT-x/AMD-V) if you'll use VMs or Docker",
                        "Save and exit (usually F10)"
                    ],
                    xmpExpo: {
                        title: "🔰 What is XMP/EXPO?",
                        description: "**XMP (Intel) / EXPO (AMD)** apply preset memory frequency, timings and voltage. A first boot normally uses a compatible JEDEC default; its speed depends on the platform and module. These profiles are a form of memory overclocking, so advertised speed is not guaranteed on every CPU and motherboard. Check compatibility and test stability after enabling one.",
                        image: {
                            src: "/images/bios/xmp-setting.svg",
                            alt: "Schematic firmware menu with JEDEC default and optional XMP or EXPO profile",
                            caption: "Firmware menus and available profiles vary by motherboard"
                        }
                    },
                    uefiLegacy: {
                        title: "🔰 UEFI vs Legacy Boot Mode",
                        description: "**UEFI mode** is required for a supported Windows 11 installation, alongside TPM 2.0 and Secure Boot capability. Confirm CPU and other requirements with Microsoft before installing. Legacy/CSM is intended for older systems; changing boot mode on an existing installation may prevent it from booting.",
                        image: {
                            src: "/images/bios/boot-mode.svg",
                            alt: "Conceptual comparison of UEFI and legacy boot modes",
                            caption: "Check compatibility before changing the boot mode"
                        }
                    },
                    erp: {
                        title: "🔰 What is ERP Mode?",
                        description: "**ErP** is a firmware option that can reduce standby power. Actual consumption and effects vary by motherboard; some boards disable Wake-on-LAN or USB power while shut down. Consult the motherboard manual before changing it."
                    }
                },
                checklist: [
                    "System powers on (fans spin, LEDs light)",
                    "POST successful (video output achieved)",
                    "No beep codes or debug LED errors",
                    "BIOS accessible",
                    "Memory left at default or a compatible profile enabled and checked",
                    "Boot mode set to UEFI",
                    "Boot order configured (USB first for installation)"
                ]
            },
            os: {
                title: "OS Installation & Deployment",
                usbCreation: {
                    title: "Windows 11 USB Creation",
                    method1: "**Recommended: Microsoft's Media Creation Tool.** Download it from Microsoft's Windows 11 page and use a blank USB drive of at least 8 GB; creating the installer erases its contents. Download and preparation time depends on your connection.",
                    method2: "**Before installation:** verify that the CPU, TPM 2.0 and UEFI/Secure Boot capability meet Microsoft's requirements. Back up any data on the target drive before changing partitions. Unsupported hardware may not receive support or updates."
                },
                installation: {
                    title: "Windows 11 Installation Process",
                    steps: [
                        "Insert USB and restart PC",
                        "Press boot menu key (F12/F11/ESC - varies by manufacturer)",
                        "Select USB drive from boot menu",
                        "Follow Windows installation wizard",
                        "Choose 'Custom: Install Windows only (advanced)'",
                        "Partition drives as needed (create new partition or install on existing)",
                        "Wait for installation to finish; duration depends on the system and storage",
                        "Complete user account setup"
                    ]
                },
                drivers: {
                    title: "Driver Installation (CRITICAL STEP)",
                    explanation: "💡 **Driver sources:** Windows Update is a useful starting point. For missing features or newer supported drivers, use the device or motherboard OEM's support page, or the relevant Intel, AMD or NVIDIA site. Check the exact model and operating system.",
                    order: [
                        "**Chipset:** use the motherboard or system OEM's support page, or the platform vendor's official tool when appropriate.",
                        "**Graphics:** use the GPU or system OEM's supported driver, or the official NVIDIA, AMD or Intel download page.",
                        "**Audio and network:** install the exact model's supported packages if Windows Update has not provided full functionality.",
                        "**Optional utilities:** install only software needed for your actual peripherals and hardware."
                    ]
                },
                postInstall: {
                    title: "Post-Installation Checklist",
                    critical: [
                        "Run Windows Update until no updates remain (check multiple times)",
                        "Check whether chipset drivers from the system or board manufacturer are needed",
                        "Verify that the GPU uses a supported driver from its OEM, NVIDIA, AMD or Intel",
                        "Verify Device Manager shows no unknown devices (yellow triangle warnings)",
                        "Install audio drivers (test sound)",
                        "Install network drivers (test internet connection)",
                        "Install peripheral software (iCUE, NZXT CAM, etc.) if you have compatible hardware",
                        "**Stability check:** observe temperatures and system behaviour under a workload appropriate to the hardware; stop if temperatures or behaviour are abnormal."
                    ]
                },
                optimization: {
                    title: "Optional: Post-Install Optimization",
                    steps: [
                        "Set Windows power plan to 'High Performance' or 'Balanced' (Settings > Power & Sleep)",
                        "Disable unnecessary startup programs (Task Manager > Startup tab)",
                        "Configure Windows privacy settings (Settings > Privacy)",
                        "Install essential software (browser, office suite, etc.)",
                        "Enable Game Mode for gaming PCs (Settings > Gaming > Game Mode)"
                    ]
                },

                checklist: [
                    "Windows 11 installed successfully",
                    "All Windows Updates completed",
                    "Chipset drivers installed (first)",
                    "Supported graphics driver verified",
                    "Audio drivers installed and tested",
                    "Network drivers installed and connectivity verified",
                    "Peripheral software installed (iCUE, NZXT CAM, etc. if applicable)",
                    "Device Manager clean (no unknown devices)",
                    "Stress test passed (CPU and GPU stable)",
                    "Ready for deployment"
                ]
            }
        }
} as const;

type Localized<T> = T extends string
    ? string
    : T extends readonly (infer Item)[]
        ? Localized<Item>[]
        : T extends object
            ? { [Key in keyof T]: Localized<T[Key]> }
            : T;

export type GuideTranslation = Localized<typeof en>;

const es: GuideTranslation = {
        siteName: "Guía de montaje de PC",
        tagline: "Una guía práctica y multilingüe para montar y preparar un ordenador de sobremesa.",
        ui: {
            navigationLabel: "Navegación de la guía",
            languageLabel: "Elegir idioma",
            skipLink: "Saltar al contenido",
            openGuide: "Empezar la guía",
            heroAlt: "Montaje de un PC de sobremesa sobre una mesa de trabajo",
            aboutTitle: "Sobre este proyecto",
            aboutBody: "Creé este proyecto personal a partir de mi experiencia práctica montando ordenadores. Muestra cómo convierto procedimientos de hardware en material formativo claro para quienes montan su primer PC y para técnicos junior.",
            independent: "Proyecto personal independiente. No está afiliado ni avalado por ninguna empresa en la que haya trabajado.",
            technologiesTitle: "Tecnologías",
            sourcesTitle: "Fuentes técnicas",
            sourcesIntro: "Esta miniguía complementa los manuales de la placa base, caja, fuente y disipador. Consúltalos para las instrucciones específicas de cada modelo.",
            reviewedLabel: "Contenido técnico revisado",
            checklistTitle: "Lista de comprobación",
            progressLabel: "Progreso de la sección",
            resetLabel: "Reiniciar progreso",
            resetConfirm: "¿Reiniciar el progreso de esta sección?",
            footer: "Una guía independiente de montaje de PC y documentación técnica."
        },
        navigation: {
            prep: "Preparación y Seguridad",
            hardware: "Ensamblaje de Hardware",
            cabling: "Cableado",
            boot: "Primer Arranque y Solución de Problemas",
            os: "SO y Despliegue"
        },
        sections: {
            prep: {
                title: "Preparación y Seguridad",
                tools: {
                    title: "Herramientas Necesarias",
                    items: [
                        "Destornillador de estrella (punta magnética recomendada)",
                        "Bridas / Tiras de velcro",
                        "Pasta térmica (si no viene pre-aplicada)",
                        "Pulsera antiestática (protección ESD)"
                    ]
                },
                safety: {
                    title: "Precauciones de Seguridad",
                    items: [
                        "Trabaja en superficie no conductora (mesa de madera, alfombra antiestática)",
                        "Desconecta el equipo de la red eléctrica antes de instalar o recolocar componentes. Usa la pulsera ESD según sus instrucciones o toca con frecuencia una parte metálica sin pintar de la caja",
                        "Evita trabajar sobre alfombra",
                        "Mantén líquidos alejados del área de trabajo",
                        "Maneja componentes por los bordes, evita tocar pines o contactos"
                    ]
                },
                checklist: [
                    "Todas las herramientas reunidas",
                    "Espacio de trabajo preparado (limpio, no conductor)",
                    "Protección ESD en su lugar",
                    "Cajas de componentes abiertas e inventariadas"
                ]
            },
            hardware: {
                title: "Ensamblaje de Hardware",
                beginner: {
                    title: "🔰 Para Principiantes: ¿Qué Son Estos Componentes?",
                    items: [
                        "**CPU (Unidad Central de Procesamiento)**: El 'cerebro' del ordenador. Maneja todos los cálculos e instrucciones.",
                        "**RAM (Memoria de Acceso Aleatorio)**: Espacio de trabajo temporal para programas activos. Más RAM = más programas ejecutándose sin problemas simultáneamente.",
                        "**Placa Base**: El 'sistema nervioso' que conecta todos los componentes.",
                        "**GPU (Unidad de Procesamiento Gráfico)**: Procesa gráficos y pantalla. Esencial para gaming o edición de vídeo."
                    ]
                },
                cpu: {
                    title: "Instalación de CPU y Refrigerador",
                    warning: "⚠️ CRÍTICO: ¡Retira la cubierta protectora de plástico de la base del refrigerador antes de instalar!",
                    steps: [
                        "Abre el socket de CPU en la placa base (levanta el brazo de retención)",
                        "Alinea la CPU con las muescas del socket (indicador de triángulo dorado)",
                        "Coloca la CPU suavemente - NO fuerces",
                        "Baja el brazo de retención para asegurar",
                        "Si no hay pasta preaplicada, usa la cantidad y el patrón indicados por el fabricante del disipador o de la pasta",
                        "Instala el refrigerador de CPU según instrucciones del fabricante",
                        "Conecta el cable del ventilador de CPU al conector CPU_FAN de la placa"
                    ],
                    image: {
                        src: "/images/cpu/cpu-installation.webp",
                        alt: "Guía de Instalación de CPU",
                        caption: "Instalación de CPU - Alinear indicador de triángulo dorado"
                    }
                },
                ram: {
                    title: "Instalación de RAM",
                    explanation: "💡 **¿Por qué A2/B2?** Muchas placas recomiendan estas ranuras para dos módulos, pero debes comprobar el manual del modelo. El doble canal aumenta el ancho de banda disponible; la mejora real depende de la aplicación.",
                    steps: [
                        "Verifica el manual de la placa para ranuras DIMM correctas (usualmente A2/B2 para dual-channel)",
                        "Abre los clips de retención en ambos lados de la ranura",
                        "Alinea la muesca de la RAM con la llave de la ranura",
                        "Presiona firmemente hasta que los clips encajen",
                        "Verifica que ambos clips estén bloqueados"
                    ],
                    image: {
                        src: "/images/ram/ram-installation.webp",
                        alt: "Guía de Instalación de RAM",
                        caption: "Ejemplo de colocación: verifica las ranuras recomendadas en el manual de tu placa"
                    }
                },
                case: {
                    title: "Instalación de Placa Base en Gabinete",
                    steps: [
                        "Instala la placa trasera de E/S si no viene integrada en la placa base",
                        "Instala separadores de placa según el tamaño de tu placa (ATX/mATX/ITX)",
                        "Coloca cuidadosamente la placa, alineando con el panel I/O y separadores",
                        "Asegura con tornillos - no aprietes en exceso",
                        "Instala GPU si aplica (retira cubiertas de ranura PCIe primero)"
                    ],
                    image: {
                        src: "/images/motherboard/overview.svg",
                        alt: "Esquema de una placa base y las zonas de sus componentes principales",
                        caption: "Esquema orientativo: la posición depende del modelo de placa"
                    }
                },
                checklist: [
                    "CPU instalada correctamente",
                    "Pasta térmica presente (preaplicada o añadida según el disipador)",
                    "Cubierta de plástico del refrigerador REMOVIDA",
                    "Ventilador de CPU conectado",
                    "RAM instalada en las ranuras recomendadas por el manual",
                    "Placa base asegurada con todos los separadores",
                    "GPU instalada (si aplica)"
                ]
            },
            cabling: {
                title: "Cableado (La Parte Difícil)",
                frontPanel: {
                    title: "Conectores del Panel Frontal (F_PANEL)",
                    warning: "⚠️ ¡Verifica el manual de tu placa base para el diseño exacto de pines! Esto es lo que más gente confunde.",
                    explanation: "💡 **Los interruptores Power/Reset NO tienen polaridad** - funcionan en cualquier dirección. **Los LEDs SÍ tienen polaridad** (+/-) - si no encienden, gira el conector 180°.",
                    connectors: [
                        "Power SW (Botón de encendido) - Usualmente 2 pines, sin polaridad",
                        "Reset SW (Botón reset) - Usualmente 2 pines, sin polaridad",
                        "HDD LED (Luz de actividad disco duro) - Usualmente 2 pines, la polaridad importa (+/-)",
                        "Power LED (+/-) - Usualmente 2 pines, la polaridad importa",
                        "USB 3.0 header (Conector de 19 pines - solo encaja de una forma)",
                        "USB 2.0 headers (9 pines - verifica manual para ubicación)",
                        "HD Audio (Conector AC'97 o HDA - para jack de auriculares del panel frontal)"
                    ],
                    image: {
                        src: "/images/cables/front-panel.svg",
                        alt: "Esquema de interruptores e indicador del panel frontal sin asignación de pines",
                        caption: "Concepto de conexión: consulta el manual para los pines reales"
                    }
                },
                power: {
                    title: "Cables de Fuente de Alimentación",
                    cables: [
                        "ATX 24 pines Principal (conector más grande, va a la placa base)",
                        "8 pines (4+4) CPU Power (¡Se divide! No confundir con cable GPU)",
                        "La GPU puede usar conectores de 6, 8 (6+2), 12VHPWR o el más reciente 12V-2x6. Sigue los manuales de GPU y fuente; usa cables PCIe separados cuando se indique.",
                        "Inserta por completo los conectores de la GPU y evita dobleces fuertes o tensión lateral junto a los de alta potencia.",
                        "No reutilices cables modulares de otra fuente salvo confirmación expresa de compatibilidad entre los modelos por el fabricante.",
                        "SATA para unidades de almacenamiento",
                        "Conectores de ventilador a los headers de la placa"
                    ],
                    image: {
                        src: "/images/cables/gpu-power-types.svg",
                        alt: "Esquema de conectores de alimentación de GPU de 6, 8 y 12 más 4 pines",
                        caption: "Tipos de conector: confirma los requisitos de GPU y fuente"
                    }
                },
                fans: {
                    title: "Refrigeración y Ventiladores",
                    headers: [
                        "**CPU_FAN**: Conecta aquí el ventilador del disipador, salvo que los manuales indiquen otra configuración; algunas placas avisan o detienen el arranque si no detectan su señal.",
                        "**AIO_PUMP**: Para bombas de refrigeración líquida compatibles; comprueba el conector, la corriente admisible y la velocidad en ambos manuales.",
                        "**SYS_FAN / CHA_FAN**: Para ventiladores de caja. Velocidad controlable en BIOS."
                    ],
                    pwm: "**4 Pines PWM vs 3 Pines DC**: Los ventiladores de 4 pines permiten control preciso (PWM). Los de 3 pines se controlan por voltaje (menos preciso). Ambos encajan en conectores de 4 pines (la pestaña guía asegura la alineación).",
                    image: {
                        src: "/images/cables/fan-headers.webp",
                        alt: "Headers Ventilador PWM vs DC",
                        caption: "Conectores de ventilador PWM de cuatro pines y DC de tres pines; consulta el manual"
                    }
                },
                rgb: {
                    title: "Iluminación RGB (ZONA DE PELIGRO)",
                    warning: "⚠️ ¡NO MEZCLES RGB DE 5V Y 12V! QUEMARÁS TUS LEDS.",
                    types: [
                        "**5V ARGB (Addressable)**: 3 pines con espacio [Pin][Pin][Hueco][Pin]. Digital, control individual de LEDs. Conectar SOLO a cabezales de 5V.",
                        "**12V RGB (Estándar)**: 4 pines [Pin][Pin][Pin][Pin]. Analógico, toda la tira cambia de color. Conectar SOLO a cabezales de 12V."
                    ],
                    image: {
                        src: "/images/cables/rgb-headers.webp",
                        alt: "Headers 5V ARGB vs 12V RGB",
                        caption: "No conectes un dispositivo ARGB de 5 V a un cabezal RGB de 12 V"
                    }
                },
                management: {
                    title: "Consejo Pro: Gestión de Cables",
                    explanation: "💡 La buena gestión de cables no es solo estética - mejora significativamente el flujo de aire y facilita futuras mejoras.",
                    tips: [
                        "Pasa cables detrás de la bandeja de la placa base cuando sea posible (usa los agujeros pre-cortados)",
                        "Usa bridas o velcro para agrupar y asegurar cables",
                        "Mantén cables alejados de aspas de ventiladores",
                        "Planifica tu ruta ANTES de la instalación final - es más difícil arreglar después"
                    ],
                    image: {
                        src: "/images/cables/cable-management.webp",
                        alt: "Ejemplo de Gestión de Cables",
                        caption: "Ejemplo de Buena Gestión de Cables"
                    }
                },
                checklist: [
                    "ATX 24 pines conectado",
                    "8 pines de CPU conectado",
                    "Alimentación de GPU conectada (si aplica)",
                    "Conectores de panel frontal instalados (Power, Reset, LED)",
                    "Conectores USB conectados",
                    "Conector de audio conectado",
                    "Almacenamiento instalado; unidades SATA alimentadas y conectadas cuando corresponda",
                    "Cables organizados y asegurados"
                ]
            },
            boot: {
                title: "Primer Arranque y Solución de Problemas",
                firstBoot: {
                    title: "Encendido Inicial",
                    steps: [
                        "Verifica todas las conexiones de alimentación",
                        "Conecta el monitor a la salida de vídeo prevista para este equipo; normalmente la GPU dedicada si hay una instalada",
                        "Enciende el interruptor de la PSU",
                        "Presiona el botón de encendido",
                        "Observa el POST (Power-On Self Test) - LEDs, ventiladores girando"
                    ]
                },
                troubleshooting: {
                    title: "Problemas Comunes",
                    noVideo: {
                        title: "Sin Salida de Video",
                        solutions: [
                            "Verifica que el cable del monitor esté en el puerto de la GPU, no en la placa (si hay GPU)",
                            "Verifica que el monitor esté encendido y en la entrada correcta",
                            "Apaga y desenchufa el equipo antes de recolocar la GPU o sus cables de alimentación",
                            "Realiza un Clear CMOS (Resetear BIOS)",
                            "**Verifica Debug LEDs/Códigos**: Busca luz 'VGA' o Código Q numérico (consulta manual para significado)."
                        ]
                    },
                    noPost: {
                        title: "Sin POST / No Enciende",
                        solutions: [
                            "**¡REVISA EL INTERRUPTOR DE LA FUENTE!** Asegúrate de que esté en 'I' (ON), no en 'O' (OFF).",
                            "Verifica que 24 pines y 8 pines de CPU estén completamente insertados",
                            "Verifica que el conector Power SW del panel frontal esté correcto",
                            "Verifica cortocircuitos por separadores de placa",
                            "**Códigos de Error**: Si tu placa tiene pantalla numérica, busca el código en el manual."
                        ]
                    },
                    cmos: {
                        title: "Cómo hacer Clear CMOS (Resetear BIOS)",
                        steps: [
                            "Apaga el PC, desconecta la fuente y retira el cable de alimentación. Consulta el manual de la placa antes de tocar ningún puente.",
                            "Usa el botón Clear CMOS o los pines indicados, exactamente como establece el manual; no cortocircuites pines sin identificar.",
                            "Si el manual permite retirar la pila, extráela y vuelve a colocarla siguiendo sus instrucciones y respetando la polaridad.",
                            "Reconecta la alimentación y enciende. Comprueba la configuración del firmware: pueden haberse restablecido el orden de arranque y los perfiles de memoria."
                        ],
                        image: {
                            src: "/images/bios/clear-cmos.svg",
                            alt: "Recordatorio esquemático para desconectar la alimentación y consultar el manual antes de borrar CMOS",
                            caption: "Esquema conceptual: no deduzcas la ubicación de los pines de esta imagen"
                        }
                    }
                },
                bios: {
                    title: "Configuración BIOS (Ajustes Esenciales)",
                    explanation: "💡 **BIOS (Sistema Básico de Entrada/Salida)** es el firmware que inicializa el hardware antes de que cargue Windows. Los sistemas modernos usan UEFI BIOS.",
                    steps: [
                        "Presiona DEL o F2 durante el arranque para entrar a BIOS (observa pantalla de inicio para la tecla)",
                        "Navega a la sección Memory/Overclocking",
                        "Opcional: activa un perfil XMP/EXPO compatible y comprueba la estabilidad",
                        "Establece modo de arranque a UEFI (requerido para Windows 11)",
                        "Establece orden de arranque (USB primero para instalación Windows, luego tu SSD/HDD)",
                        "Opcional: Activa virtualización (VT-x/AMD-V) si usarás VMs o Docker",
                        "Guarda y sal (usualmente F10)"
                    ],
                    xmpExpo: {
                        title: "🔰 ¿Qué es XMP/EXPO?",
                        description: "**XMP (Intel) / EXPO (AMD)** aplican frecuencia, latencias y voltaje predefinidos. El primer arranque suele usar un valor JEDEC compatible, que depende de la plataforma y el módulo. Estos perfiles son una forma de overclocking de memoria: la velocidad anunciada no está garantizada con cualquier CPU y placa. Comprueba compatibilidad y estabilidad.",
                        image: {
                            src: "/images/bios/xmp-setting.svg",
                            alt: "Menú de firmware esquemático con valor JEDEC y perfil XMP o EXPO opcional",
                            caption: "El menú y los perfiles disponibles dependen de la placa"
                        }
                    },
                    uefiLegacy: {
                        title: "🔰 UEFI vs Modo de Arranque Legacy",
                        description: "**UEFI** es necesario para instalar Windows 11 de forma compatible, junto con TPM 2.0 y capacidad de arranque seguro. Comprueba también la CPU y los demás requisitos de Microsoft. Legacy/CSM se usa para sistemas antiguos; cambiar el modo de un sistema ya instalado puede impedir que arranque.",
                        image: {
                            src: "/images/bios/boot-mode.svg",
                            alt: "Comparación conceptual de modos UEFI y Legacy",
                            caption: "Comprueba la compatibilidad antes de cambiar el modo de arranque"
                        }
                    },
                    erp: {
                        title: "🔰 ¿Qué es el Modo ERP?",
                        description: "**ErP** es una opción de firmware que puede reducir el consumo en reposo. El ahorro y sus efectos dependen de la placa; en algunas se desactivan Wake-on-LAN o la alimentación USB con el PC apagado. Consulta el manual antes de modificarla."
                    }
                },
                checklist: [
                    "Sistema enciende (ventiladores giran, LEDs encienden)",
                    "POST exitoso (salida de video lograda)",
                    "Sin códigos de pitido o errores LED de debug",
                    "BIOS accesible",
                    "Memoria en valores predeterminados o con perfil compatible comprobado",
                    "Modo UEFI y requisitos de Windows 11 comprobados",
                    "Orden de arranque configurado"
                ]
            },
            os: {
                title: "Instalación SO y Despliegue",
                usbCreation: {
                    title: "Creación USB Windows 11",
                    method1: "**Recomendado: herramienta de creación de medios de Microsoft.** Descárgala desde la página oficial de Windows 11 y utiliza una memoria USB vacía de al menos 8 GB; el proceso borra su contenido. El tiempo depende de la conexión.",
                    method2: "**Antes de instalar:** comprueba CPU, TPM 2.0 y compatibilidad con UEFI y arranque seguro según Microsoft. Haz una copia de los datos de la unidad de destino antes de modificar particiones. El hardware no compatible puede quedar sin soporte ni actualizaciones."
                },
                installation: {
                    title: "Proceso de Instalación Windows 11",
                    steps: [
                        "Inserta USB y reinicia PC",
                        "Presiona tecla menú de arranque durante inicio (F12/F11/ESC - varía según fabricante)",
                        "Selecciona unidad USB del menú de arranque",
                        "Sigue el asistente de instalación Windows",
                        "Elige 'Personalizado: Instalar solo Windows (avanzado)'",
                        "Particiona unidades según necesidad (crear nueva partición o instalar en existente)",
                        "Espera a que termine la instalación; la duración depende del equipo y la unidad",
                        "Completa configuración cuenta de usuario"
                    ]
                },
                drivers: {
                    title: "Instalación de Drivers (PASO CRÍTICO)",
                    explanation: "💡 **Fuentes de controladores:** Windows Update es un buen punto de partida. Para funciones ausentes o versiones compatibles más recientes, consulta la página del fabricante del equipo o placa, o las páginas oficiales de Intel, AMD y NVIDIA. Verifica el modelo exacto y el sistema operativo.",
                    order: [
                        "**Chipset:** consulta el soporte del equipo o placa, o la herramienta oficial del fabricante de la plataforma si procede.",
                        "**Gráficos:** usa un controlador compatible del fabricante del equipo o de NVIDIA, AMD o Intel.",
                        "**Audio y red:** instala los paquetes para el modelo exacto si Windows Update no proporciona todas las funciones.",
                        "**Utilidades opcionales:** instala solo el software necesario para el hardware y periféricos presentes."
                    ]
                },
                postInstall: {
                    title: "Lista Post-Instalación",
                    critical: [
                        "Ejecuta Windows Update hasta sin actualizaciones restantes (verifica múltiples veces)",
                        "Comprueba si hacen falta controladores de chipset del fabricante del equipo o placa",
                        "Verifica que la GPU use un controlador compatible del fabricante, NVIDIA, AMD o Intel",
                        "Verifica que el Administrador Dispositivos no muestra dispositivos desconocidos (advertencias triángulo amarillo)",
                        "Instala drivers audio (prueba sonido)",
                        "Instala drivers red (prueba conexión internet)",
                        "Instala software periféricos (iCUE, NZXT CAM, etc.) si tienes hardware compatible",
                        "**Comprobación de estabilidad:** observa temperaturas y comportamiento bajo una carga adecuada; detén la prueba ante valores o síntomas anormales."
                    ]
                },
                optimization: {
                    title: "Opcional: Optimización Post-Instalación",
                    steps: [
                        "Establece plan energía Windows a 'Alto rendimiento' o 'Equilibrado' (Configuración > Energía y Suspensión)",
                        "Desactiva programas inicio innecesarios (Administrador Tareas > pestaña Inicio)",
                        "Configura ajustes privacidad Windows (Configuración > Privacidad)",
                        "Instala software esencial (navegador, suite ofimática, etc.)",
                        "Activa Modo Juego para PCs gaming (Configuración > Juegos > Modo Juego)"
                    ]
                },
                checklist: [
                    "Windows 11 instalado correctamente",
                    "Todas las actualizaciones de Windows completadas",
                    "Drivers de chipset instalados",
                    "Controlador gráfico compatible verificado",
                    "Administrador de Dispositivos limpio (sin dispositivos desconocidos)",
                    "Audio probado y funcionando",
                    "Conectividad de red verificada",
                    "Punto de restauración del sistema creado",
                    "Prueba de estrés aprobada",
                    "Listo para despliegue"
                ]
            }
        }
};

const de: GuideTranslation = {
        siteName: "PC-Montageleitfaden",
        tagline: "Eine praktische, mehrsprachige Anleitung für Montage und Einrichtung eines Desktop-PCs.",
        ui: {
            navigationLabel: "Navigation des Leitfadens",
            languageLabel: "Sprache wählen",
            skipLink: "Zum Inhalt springen",
            openGuide: "Anleitung starten",
            heroAlt: "Zusammenbau eines Desktop-PCs auf einer Werkbank",
            aboutTitle: "Über dieses Projekt",
            aboutBody: "Dieses unabhängige Portfolio-Projekt basiert auf meiner praktischen Erfahrung beim Zusammenbau von Desktop-PCs. Es zeigt, wie ich Hardware-Arbeitsschritte für Einsteiger und angehende IT-Techniker verständlich dokumentiere.",
            independent: "Unabhängiges Portfolio-Projekt. Keine Verbindung zu oder Unterstützung durch frühere Arbeitgeber.",
            technologiesTitle: "Technologien",
            sourcesTitle: "Technische Quellen",
            sourcesIntro: "Diese Kurzanleitung ergänzt die Handbücher für Mainboard, Gehäuse, Netzteil und Kühler. Für modellspezifische Schritte sind die jeweiligen Handbücher maßgeblich.",
            reviewedLabel: "Technische Inhalte geprüft",
            checklistTitle: "Checkliste",
            progressLabel: "Fortschritt in diesem Abschnitt",
            resetLabel: "Fortschritt zurücksetzen",
            resetConfirm: "Fortschritt für diesen Abschnitt zurücksetzen?",
            footer: "Ein unabhängiger Leitfaden für PC-Montage und technische Dokumentation."
        },
        navigation: {
            prep: "Vorbereitung & Sicherheit",
            hardware: "Hardware-Zusammenbau",
            cabling: "Verkabelung",
            boot: "Erster Start & Fehlerbehebung",
            os: "Betriebssystem & Bereitstellung"
        },
        sections: {
            prep: {
                title: "Vorbereitung und Sicherheit",
                tools: {
                    title: "Erforderliche Werkzeuge",
                    items: [
                        "Kreuzschlitzschraubendreher (magnetische Spitze empfohlen)",
                        "Kabelbinder / Klettbänder",
                        "Wärmeleitpaste (falls nicht vorinstalliert)",
                        "Antistatisches Armband (ESD-Schutz)"
                    ]
                },
                safety: {
                    title: "Sicherheitsvorkehrungen",
                    items: [
                        "Auf nicht leitender Oberfläche arbeiten (Holztisch, antistatische Matte)",
                        "Vor dem Einbau oder erneuten Einsetzen von Komponenten das Netzkabel ziehen. ESD-Armband nach Anleitung verwenden oder regelmäßig unlackiertes Gehäusemetall berühren",
                        "Nicht auf Teppich arbeiten",
                        "Flüssigkeiten vom Arbeitsbereich fernhalten",
                        "Komponenten an den Kanten anfassen, Pins oder Kontakte nicht berühren"
                    ]
                },
                checklist: [
                    "Alle Werkzeuge bereitgestellt",
                    "Arbeitsbereich vorbereitet (sauber, nicht leitend)",
                    "ESD-Schutz vorhanden",
                    "Komponentenverpackungen geöffnet und inventarisiert"
                ]
            },
            hardware: {
                title: "Hardware-Zusammenbau",
                beginner: {
                    title: "🔰 Für Anfänger: Was Sind Diese Komponenten?",
                    items: [
                        "**CPU (Central Processing Unit)**: Das 'Gehirn' des Computers. Verarbeitet alle Berechnungen und Befehle.",
                        "**RAM (Random Access Memory)**: Temporärer 'Arbeitsbereich' für aktive Programme. Mehr RAM = mehr Programme laufen gleichzeitig reibungslos.",
                        "**Mainboard**: Das 'Nervensystem', das alle Komponenten verbindet.",
                        "**GPU (Graphics Processing Unit)**: Verarbeitet Grafik und Anzeige. Essentiell für Gaming oder Videobearbeitung."
                    ]
                },
                cpu: {
                    title: "CPU- und Kühler-Installation",
                    warning: "⚠️ KRITISCH: Entfernen Sie die Plastikschutzabdeckung von der Kühlerbasis vor der Installation!",
                    steps: [
                        "CPU-Sockel auf Mainboard öffnen (Haltebügel anheben)",
                        "CPU mit Sockelkerben ausrichten (goldener Dreiecksindikator)",
                        "CPU vorsichtig einsetzen - NICHT forcieren",
                        "Haltebügel zum Sichern herunterdrücken",
                        "Falls keine Wärmeleitpaste voraufgetragen ist, Menge und Auftragsmuster nach Herstellerangaben wählen",
                        "CPU-Kühler gemäß Herstelleranweisung installieren",
                        "CPU-Lüfterkabel an Mainboard CPU_FAN-Anschluss anschließen"
                    ],
                    image: {
                        src: "/images/cpu/cpu-installation.webp",
                        alt: "CPU-Installationsanleitung",
                        caption: "CPU-Installation - Goldenes Dreieck ausrichten"
                    }
                },
                ram: {
                    title: "RAM-Installation",
                    explanation: "💡 **Warum A2/B2?** Viele Mainboards empfehlen diese Steckplätze für zwei Module. Prüfen Sie das Handbuch Ihres Modells. Dual-Channel erhöht die verfügbare Speicherbandbreite; der Leistungsvorteil hängt von der Anwendung ab.",
                    steps: [
                        "Mainboard-Handbuch für korrekte DIMM-Slots prüfen (üblicherweise A2/B2 für Dual-Channel)",
                        "Halteclips auf beiden Seiten des Slots öffnen",
                        "RAM-Kerbe mit Slot-Schlüssel ausrichten",
                        "Fest drücken, bis Clips einrasten",
                        "Beide Clips auf Verriegelung prüfen"
                    ],
                    image: {
                        src: "/images/ram/ram-installation.webp",
                        alt: "RAM-Installationsanleitung",
                        caption: "Beispiel für die RAM-Platzierung: Steckplätze im Mainboard-Handbuch prüfen"
                    }
                },
                case: {
                    title: "Mainboard-Installation im Gehäuse",
                    steps: [
                        "I/O-Blende einsetzen, falls sie nicht bereits im Mainboard integriert ist",
                        "Mainboard-Abstandshalter entsprechend Ihrer Board-Größe installieren (ATX/mATX/ITX)",
                        "Mainboard vorsichtig platzieren, mit I/O-Blende und Abstandshaltern ausrichten",
                        "Mit Schrauben sichern - nicht zu fest anziehen",
                        "GPU installieren, falls zutreffend (PCIe-Slotabdeckungen zuerst entfernen)"
                    ],
                    image: {
                        src: "/images/motherboard/overview.svg",
                        alt: "Schematische Mainboard-Ansicht mit den wichtigsten Komponentenbereichen",
                        caption: "Schematische Darstellung: die Positionen sind modellabhängig"
                    }
                },
                checklist: [
                    "CPU korrekt installiert",
                    "Wärmeleitpaste vorhanden (voraufgetragen oder gemäß Kühleranleitung ergänzt)",
                    "Kühlerschutzfolie ENTFERNT",
                    "CPU-Lüfter angeschlossen",
                    "RAM in den vom Mainboard-Handbuch empfohlenen Slots eingesetzt",
                    "Mainboard mit allen Abstandshaltern gesichert",
                    "GPU installiert (falls zutreffend)"
                ]
            },
            cabling: {
                title: "Verkabelung (Der schwierige Teil)",
                frontPanel: {
                    title: "Frontpanel-Anschlüsse (F_PANEL)",
                    warning: "⚠️ Prüfen Sie Ihr Mainboard-Handbuch für die exakte Pin-Belegung! Hier machen die meisten Leute Fehler.",
                    explanation: "💡 **Power/Reset-Schalter haben KEINE Polarität** - funktionieren in beide Richtungen. **LEDs HABEN Polarität** (+/-) - wenn sie nicht leuchten, Stecker um 180° drehen.",
                    connectors: [
                        "Power SW (Ein-/Ausschalter) - Üblicherweise 2-polig, keine Polarität",
                        "Reset SW (Reset-Taste) - Üblicherweise 2-polig, keine Polarität",
                        "HDD LED (Festplattenaktivitäts-LED) - Üblicherweise 2-polig, Polarität beachten (+/-)",
                        "Power LED (+/-) - Üblicherweise 2-polig, Polarität beachten",
                        "USB 3.0-Anschluss (19-poliger kodierter Stecker - passt nur in eine Richtung)",
                        "USB 2.0-Anschlüsse (9-polig - Handbuch für Position prüfen)",
                        "HD Audio (AC'97 oder HDA-Anschluss - für Frontpanel-Kopfhörerbuchse)"
                    ],
                    image: {
                        src: "/images/cables/front-panel.svg",
                        alt: "Schematische Darstellung von Frontpanel-Schaltern und LED ohne Pinbelegung",
                        caption: "Nur Anschlussprinzip: genaue Pins im Mainboard-Handbuch nachschlagen"
                    }
                },
                power: {
                    title: "Netzteilkabel",
                    cables: [
                        "24-poliges ATX-Hauptstromkabel (größter Stecker, geht zum Mainboard)",
                        "8-poliges (4+4) CPU-Stromkabel (Teilbar! Nicht mit GPU-Kabel verwechseln)",
                        "Die GPU kann 6-Pin-, 8-Pin- (6+2), 12VHPWR- oder neuere 12V-2x6-Anschlüsse nutzen. GPU- und Netzteilhandbuch beachten; getrennte PCIe-Kabel verwenden, wenn vorgeschrieben.",
                        "GPU-Stromstecker vollständig einstecken. Starke Knicke und seitliche Belastung nahe Hochleistungsanschlüssen vermeiden.",
                        "Modulare Netzteilkabel anderer Geräte nur verwenden, wenn der Hersteller die Kompatibilität der konkreten Modelle ausdrücklich bestätigt.",
                        "SATA-Strom für Speicherlaufwerke",
                        "Lüfteranschlüsse an Mainboard-Buchsen"
                    ],
                    image: {
                        src: "/images/cables/gpu-power-types.svg",
                        alt: "Schema von GPU-Stromanschlüssen mit 6, 8 und 12 plus 4 Pins",
                        caption: "Anschlusstypen: Anforderungen von GPU und Netzteil prüfen"
                    }
                },
                fans: {
                    title: "Kühlung & Lüfter",
                    headers: [
                        "**CPU_FAN**: Kühlerlüfter hier anschließen, sofern Kühler- und Mainboard-Handbuch nichts anderes vorgeben; manche Boards melden oder stoppen bei fehlendem Lüftersignal.",
                        "**AIO_PUMP**: Für kompatible Wasserkühlungspumpen; Anschluss, zulässige Stromstärke und Drehzahleinstellung in beiden Handbüchern prüfen.",
                        "**SYS_FAN / CHA_FAN**: Für Gehäuselüfter. Geschwindigkeit im BIOS steuerbar."
                    ],
                    pwm: "**4-Pin PWM vs 3-Pin DC**: 4-Pin-Lüfter erlauben präzise Steuerung (PWM). 3-Pin-Lüfter werden über Spannung gesteuert (weniger präzise). Beide passen in 4-Pin-Header (Führungsnase sichert Ausrichtung).",
                    image: {
                        src: "/images/cables/fan-headers.webp",
                        alt: "PWM vs DC Lüfter-Anschlüsse",
                        caption: "Vierpolige PWM- und dreipolige DC-Lüfteranschlüsse; Mainboard-Handbuch beachten"
                    }
                },
                rgb: {
                    title: "RGB-Beleuchtung (GEFAHRENZONE)",
                    warning: "⚠️ NICHT 5V UND 12V RGB MISCHEN! SIE WERDEN IHRE LEDS ZERSTÖREN.",
                    types: [
                        "**5V ARGB (Adressierbar)**: 3-Pins mit Lücke [Pin][Pin][Lücke][Pin]. Digital, einzelne LED-Steuerung. NUR an 5V-Header anschließen.",
                        "**12V RGB (Standard)**: 4-Pins [Pin][Pin][Pin][Pin]. Analog, ganzer Streifen ändert Farbe. NUR an 12V-Header anschließen."
                    ],
                    image: {
                        src: "/images/cables/rgb-headers.webp",
                        alt: "5V ARGB vs 12V RGB Anschlüsse",
                        caption: "5-V-ARGB-Geräte niemals an 12-V-RGB-Anschlüsse stecken"
                    }
                },
                management: {
                    title: "Profi-Tipp: Kabelmanagement",
                    explanation: "💡 Gutes Kabelmanagement ist nicht nur Optik - es verbessert deutlich Luftstrom und erleichtert zukünftige Upgrades.",
                    tips: [
                        "Kabel wenn möglich hinter Mainboard-Träger verlegen (vorgeschnittene Durchführungen nutzen)",
                        "Kabelbinder oder Klettband zum Bündeln und Sichern verwenden",
                        "Kabel von Lüfterblättern fernhalten",
                        "Route VOR finaler Installation planen - später schwerer zu korrigieren"
                    ],
                    image: {
                        src: "/images/cables/cable-management.webp",
                        alt: "Beispiel für Kabelmanagement",
                        caption: "Beispiel für gutes Kabelmanagement"
                    }
                },
                checklist: [
                    "24-poliges ATX-Stromkabel angeschlossen",
                    "8-poliges CPU-Stromkabel angeschlossen",
                    "GPU-Stromversorgung angeschlossen (falls zutreffend)",
                    "Frontpanel-Anschlüsse installiert (Power, Reset, LED)",
                    "USB-Anschlüsse verbunden",
                    "Audio-Anschluss verbunden",
                    "Speicher installiert; SATA-Laufwerke bei Bedarf mit Strom und Daten verbunden",
                    "Kabel organisiert und gesichert"
                ]
            },
            boot: {
                title: "Erster Start & Fehlerbehebung",
                firstBoot: {
                    title: "Erstinbetriebnahme",
                    steps: [
                        "Alle Stromanschlüsse doppelt prüfen",
                        "Monitor mit dem für diesen PC vorgesehenen Videoausgang verbinden; bei separater GPU gewöhnlich mit deren Ausgang",
                        "PSU-Schalter einschalten",
                        "Power-Taste drücken",
                        "POST (Power-On Self Test) beobachten - LEDs, Lüfter drehen"
                    ]
                },
                troubleshooting: {
                    title: "Häufige Probleme",
                    noVideo: {
                        title: "Keine Bildausgabe",
                        solutions: [
                            "Prüfen, ob Monitorkabel im GPU-Port steckt, nicht im Mainboard (falls GPU installiert)",
                            "Prüfen, ob Monitor eingeschaltet und auf richtigen Eingang gestellt ist",
                            "PC ausschalten und Netzkabel ziehen, bevor GPU oder Stromkabel erneut eingesetzt werden",
                            "Clear CMOS durchführen (BIOS zurücksetzen)",
                            "**Mainboard-Debug-LEDs/Codes prüfen**: Nach 'VGA'-Leuchte oder Q-Code-Nummer suchen."
                        ]
                    },
                    noPost: {
                        title: "Kein POST / Startet nicht",
                        solutions: [
                            "**NETZTEILSCHALTER PRÜFEN!** Sicherstellen, dass er auf 'I' (AN) steht, nicht 'O' (AUS).",
                            "Prüfen, ob 24-polig und 8-polig CPU-Strom vollständig eingesteckt",
                            "Prüfen, ob Frontpanel Power SW-Anschluss korrekt ist",
                            "Auf Kurzschlüsse durch Mainboard-Abstandshalter prüfen",
                            "**Fehlercodes prüfen**: Falls vorhanden, Q-Code-Nummer im Handbuch nachschlagen."
                        ]
                    },
                    cmos: {
                        title: "Wie man Clear CMOS durchführt (BIOS Reset)",
                        steps: [
                            "PC ausschalten, Netzteil abschalten und Netzkabel ziehen. Vor dem Berühren eines Jumpers das Mainboard-Handbuch lesen.",
                            "Clear-CMOS-Taste oder die angegebenen Pins genau nach Handbuch verwenden; niemals unbekannte Pins kurzschließen.",
                            "Falls das Handbuch es vorsieht, die Batterie nach dessen Anweisung herausnehmen und mit korrekter Polarität wieder einsetzen.",
                            "Strom wieder anschließen und starten. Firmware-Einstellungen prüfen: Boot-Reihenfolge und Speicherprofile können zurückgesetzt sein."
                        ],
                        image: {
                            src: "/images/bios/clear-cmos.svg",
                            alt: "Schematische Erinnerung an Netztrennung und Mainboard-Handbuch vor Clear CMOS",
                            caption: "Konzeptgrafik: daraus keine Jumper-Position ableiten"
                        }
                    }
                },
                bios: {
                    title: "BIOS-Konfiguration (Wesentliche Einstellungen)",
                    explanation: "💡 **BIOS (Basic Input/Output System)** ist Firmware die Hardware initialisiert bevor Windows lädt. Moderne Systeme nutzen UEFI-BIOS.",
                    steps: [
                        "DEL oder F2 während Boot drücken zum BIOS-Eintritt (Startbildschirm für Taste beachten)",
                        "Zu Memory/Overclocking-Bereich navigieren",
                        "Optional: kompatibles XMP-/EXPO-Profil aktivieren und Stabilität prüfen",
                        "Boot-Modus auf UEFI setzen (für Windows 11 erforderlich)",
                        "Boot-Reihenfolge setzen (USB zuerst für Windows-Installation, dann SSD/HDD)",
                        "Optional: Virtualisierung aktivieren (VT-x/AMD-V) falls VMs oder Docker genutzt",
                        "Speichern und beenden (meist F10)"
                    ],
                    xmpExpo: {
                        title: "🔰 Was ist XMP/EXPO?",
                        description: "**XMP (Intel) / EXPO (AMD)** setzen vorgegebene Speicherfrequenz, Timings und Spannung. Der erste Start nutzt meist einen kompatiblen JEDEC-Standardwert, dessen Geschwindigkeit von Plattform und Modul abhängt. Diese Profile sind eine Form der Speicherübertaktung; die beworbene Geschwindigkeit ist nicht für jede CPU und jedes Mainboard garantiert. Kompatibilität und Stabilität prüfen.",
                        image: {
                            src: "/images/bios/xmp-setting.svg",
                            alt: "Schematisches Firmware-Menü mit JEDEC-Standardwert und optionalem XMP- oder EXPO-Profil",
                            caption: "Menü und verfügbare Profile hängen vom Mainboard ab"
                        }
                    },
                    uefiLegacy: {
                        title: "🔰 UEFI vs Legacy Boot-Modus",
                        description: "**UEFI** ist für eine unterstützte Windows-11-Installation erforderlich, ebenso TPM 2.0 und Secure-Boot-Fähigkeit. CPU und weitere Microsoft-Anforderungen prüfen. Legacy/CSM ist für ältere Systeme gedacht; ein Wechsel des Startmodus kann eine bestehende Installation unstartbar machen.",
                        image: {
                            src: "/images/bios/boot-mode.svg",
                            alt: "Konzeptioneller Vergleich von UEFI- und Legacy-Startmodus",
                            caption: "Vor einer Änderung des Startmodus Kompatibilität prüfen"
                        }
                    },
                    erp: {
                        title: "🔰 Was ist ERP-Modus?",
                        description: "**ErP** ist eine Firmware-Option, die den Standby-Verbrauch senken kann. Verbrauch und Auswirkungen hängen vom Mainboard ab; bei manchen Modellen entfallen Wake-on-LAN oder USB-Stromversorgung im ausgeschalteten Zustand. Vor Änderungen das Handbuch prüfen."
                    }
                },
                checklist: [
                    "System startet (Lüfter drehen, LEDs leuchten)",
                    "POST erfolgreich (Bildausgabe erreicht)",
                    "Keine Piepton-Codes oder Debug-LED-Fehler",
                    "BIOS zugänglich",
                    "Speicher mit Standardwerten oder geprüftem kompatiblem Profil betrieben",
                    "UEFI-Modus und Windows-11-Anforderungen geprüft",
                    "Boot-Reihenfolge konfiguriert"
                ]
            },
            os: {
                title: "OS-Installation & Bereitstellung",
                usbCreation: {
                    title: "Windows 11 USB-Erstellung",
                    method1: "**Empfohlen: Microsoft Media Creation Tool.** Von Microsofts Windows-11-Seite herunterladen und einen leeren USB-Stick mit mindestens 8 GB verwenden; dessen Inhalt wird gelöscht. Die Dauer hängt von der Verbindung ab.",
                    method2: "**Vor der Installation:** CPU, TPM 2.0 sowie UEFI- und Secure-Boot-Fähigkeit anhand der Microsoft-Anforderungen prüfen. Vor Partitionsänderungen Daten des Ziellaufwerks sichern. Nicht unterstützte Hardware erhält möglicherweise weder Support noch Updates."
                },
                installation: {
                    title: "Windows 11 Installationsprozess",
                    steps: [
                        "USB einstecken und PC neu starten",
                        "Boot-Menü-Taste während Start drücken (F12/F11/ESC - variiert nach Hersteller)",
                        "USB-Laufwerk aus Boot-Menü wählen",
                        "Windows-Installations-Assistenten folgen",
                        "'Benutzerdefiniert: Nur Windows installieren (erweitert)' wählen",
                        "Laufwerke nach Bedarf partitionieren (neue Partition erstellen oder auf bestehender installieren)",
                        "Installation abschließen lassen; die Dauer hängt von Gerät und Laufwerk ab",
                        "Benutzerkonto-Einrichtung abschließen"
                    ]
                },
                drivers: {
                    title: "Treiber-Installation (KRITISCHER SCHRITT)",
                    explanation: "💡 **Treiberquellen:** Windows Update ist ein sinnvoller Ausgangspunkt. Bei fehlenden Funktionen oder neueren unterstützten Treibern die Support-Seite des Geräte- oder Mainboard-Herstellers oder Intel, AMD bzw. NVIDIA nutzen. Genaues Modell und Betriebssystem prüfen.",
                    order: [
                        "**Chipsatz:** Support-Seite des Geräte- oder Mainboard-Herstellers oder gegebenenfalls das offizielle Tool des Plattformherstellers nutzen.",
                        "**Grafik:** einen unterstützten Treiber des Geräteherstellers oder von NVIDIA, AMD bzw. Intel verwenden.",
                        "**Audio und Netzwerk:** passende Pakete für das genaue Modell installieren, falls Windows Update nicht alle Funktionen bereitstellt.",
                        "**Optionale Programme:** nur Software installieren, die für die vorhandene Hardware benötigt wird."
                    ]
                },
                postInstall: {
                    title: "Nach-Installations-Checkliste",
                    critical: [
                        "Windows Update ausführen bis keine Updates verbleiben (mehrfach prüfen)",
                        "Prüfen, ob Chipsatz-Treiber vom Geräte- oder Mainboard-Hersteller erforderlich sind",
                        "Prüfen, ob die GPU einen unterstützten Treiber vom Hersteller, NVIDIA, AMD oder Intel nutzt",
                        "Geräte-Manager zeigt keine unbekannten Geräte prüfen (gelbe Dreieck-Warnungen)",
                        "Audio-Treiber installieren (Sound testen)",
                        "Netzwerk-Treiber installieren (Internet-Verbindung testen)",
                        "Peripherie-Software installieren (iCUE, NZXT CAM, etc.) falls kompatible Hardware vorhanden",
                        "**Stabilitätsprüfung:** Temperaturen und Verhalten unter geeigneter Last beobachten; bei ungewöhnlichen Werten oder Symptomen abbrechen."
                    ]
                },
                optimization: {
                    title: "Optional: Nach-Installations-Optimierung",
                    steps: [
                        "Windows-Energieplan auf 'Höchstleistung' oder 'Ausbalanciert' setzen (Einstellungen > Netzbetrieb und Energiesparen)",
                        "Unnötige Autostart-Programme deaktivieren (Task-Manager > Autostart-Tab)",
                        "Windows-Datenschutz-Einstellungen konfigurieren (Einstellungen > Datenschutz)",
                        "Essentielle Software installieren (Browser, Office-Suite, etc.)",
                        "Spielemodus für Gaming-PCs aktivieren (Einstellungen > Gaming > Spielemodus)"
                    ]
                },
                checklist: [
                    "Windows 11 erfolgreich installiert",
                    "Alle Windows-Updates abgeschlossen",
                    "Chipsatz-Treiber installiert",
                    "Unterstützten Grafiktreiber geprüft",
                    "Geräte-Manager sauber (keine unbekannten Geräte)",
                    "Audio getestet und funktioniert",
                    "Netzwerkverbindung überprüft",
                    "Systemwiederherstellungspunkt erstellt",
                    "Stresstest bestanden",
                    "Bereit zur Bereitstellung"
                ]
            }
        }
};

export const translations = {
    en,
    es,
    de,
};

export const supportedLanguages = ['en', 'es', 'de'] as const;
export type SupportedLanguage = typeof supportedLanguages[number];

export const languageNames: Record<SupportedLanguage, string> = {
    en: 'English',
    es: 'Español',
    de: 'Deutsch'
};
