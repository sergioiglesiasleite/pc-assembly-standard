export const translations = {
    en: {
        siteName: "Field Ops Guide: PC Assembly Standard",
        tagline: "Professional PC Building Documentation",
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
                        "Wear ESD wrist strap connected to grounded metal",
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
                        "Apply thermal paste (pea-size dot in center) if not pre-applied",
                        "Install CPU cooler according to manufacturer instructions",
                        "Connect CPU fan cable to motherboard CPU_FAN header (usually near CPU socket)"
                    ],
                    image: {
                        src: "/images/cpu/cpu-installation.png",
                        alt: "CPU Installation Guide",
                        caption: "CPU Installation - Align golden triangle indicator"
                    }
                },
                ram: {
                    title: "RAM Installation",
                    explanation: "💡 **Why A2/B2 slots?** Modern motherboards use dual-channel memory. Installing RAM in slots A2 and B2 (2nd and 4th slots) enables dual-channel mode, which DOUBLES memory bandwidth for better performance.",
                    steps: [
                        "Check motherboard manual for correct DIMM slots (usually A2/B2 for dual-channel)",
                        "Open retention clips on both sides of slot",
                        "Align RAM notch with slot key",
                        "Press firmly until clips snap into place",
                        "Verify both clips are locked - RAM should not move"
                    ],
                    image: {
                        src: "/images/ram/ram-installation.png",
                        alt: "RAM Installation Guide",
                        caption: "RAM Installation - Use A2/B2 slots for dual-channel"
                    }
                },
                case: {
                    title: "Installing Motherboard into Case",
                    steps: [
                        "Install I/O shield into case rear panel",
                        "Install motherboard standoffs matching your board size (ATX/mATX/ITX)",
                        "Carefully place motherboard, aligning with I/O shield and standoffs",
                        "Secure with screws - do not overtighten",
                        "Install GPU if applicable (remove PCIe slot covers first)"
                    ],
                    image: {
                        src: "/images/motherboard/overview.png",
                        alt: "Motherboard Component Overview",
                        caption: "Motherboard Component Overview"
                    }
                },
                checklist: [
                    "CPU installed correctly",
                    "Thermal paste applied (pea size)",
                    "Cooler plastic cover REMOVED",
                    "CPU fan connected",
                    "RAM seated in correct slots (A2/B2)",
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
                        src: "/images/cables/front-panel.png",
                        alt: "Front Panel Connectors Guide",
                        caption: "Front Panel Connectors & Polarity"
                    }
                },
                power: {
                    title: "Power Supply Cables",
                    cables: [
                        "24-pin ATX Main Power (largest connector, goes to motherboard)",
                        "8-pin (4+4) CPU Power (Splits in half! Do not mistake for GPU cable)",
                        "PCIe Power for GPU: Can be 6-pin, 8-pin (6+2), or 12VHPWR (new). Daisy-chaining NOT recommended for high-end cards.",
                        "SATA power for storage drives",
                        "Fan connectors to motherboard headers"
                    ],
                    image: {
                        src: "/images/cables/gpu-power-types.png",
                        alt: "GPU Power Connector Types",
                        caption: "GPU Power Connector Types"
                    }
                },
                fans: {
                    title: "Cooling & Fans",
                    headers: [
                        "**CPU_FAN** (Mandatory): Must connect CPU cooler here. System may not boot without it.",
                        "**AIO_PUMP**: Optimized for water cooling pumps (runs at 100% speed).",
                        "**SYS_FAN / CHA_FAN**: For case fans. Speed can be controlled in BIOS."
                    ],
                    pwm: "**4-Pin PWM vs 3-Pin DC**: 4-pin fans allow precise speed control (PWM). 3-pin fans run at voltage-controlled speeds (less precise). Both fit in 4-pin headers (keyed tab ensures correct alignment).",
                    image: {
                        src: "/images/cables/fan-headers.png",
                        alt: "PWM vs DC Fan Headers",
                        caption: ""
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
                        src: "/images/cables/rgb-headers.png",
                        alt: "5V ARGB vs 12V RGB Headers",
                        caption: ""
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
                        src: "/images/cables/cable-management.png",
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
                    "SATA/NVMe drives connected",
                    "Cables managed and secured"
                ]
            },
            boot: {
                title: "First Boot & Troubleshooting",
                firstBoot: {
                    title: "Initial Power-On",
                    steps: [
                        "Double-check all power connections",
                        "Ensure monitor is connected to GPU (NOT motherboard) if GPU is installed",
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
                            "Reseat GPU and power cables",
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
                            "1. Turn off PC and unplug PSU cable.",
                            "2. **Method A (easy)**: Remove the round silver battery (CR2032) for 5 minutes, then put it back.",
                            "3. **Method B (fast)**: Short the 'CLR_CMOS' pins with a screwdriver or jumper cap for 10 seconds.",
                            "4. Plug in and turn on. BIOS will be reset to factory defaults."
                        ],
                        image: {
                            src: "/images/bios/clear-cmos.png",
                            alt: "How to Clear CMOS (Battery & Jumper)",
                            caption: ""
                        }
                    }
                },
                bios: {
                    title: "BIOS Configuration (Essential Settings)",
                    explanation: "💡 **BIOS (Basic Input/Output System)** is the firmware that initializes hardware before Windows loads. Modern systems use UEFI BIOS.",
                    steps: [
                        "Press DEL or F2 during boot to enter BIOS (watch splash screen for key)",
                        "Navigate to Memory/Overclocking section",
                        "Enable XMP/EXPO for RAM (see detailed explanation below)",
                        "Set boot mode to UEFI (required for Windows 11)",
                        "Set boot order (USB first for Windows installation, then your SSD/HDD)",
                        "Optional: Enable virtualization (VT-x/AMD-V) if you'll use VMs or Docker",
                        "Save and exit (usually F10)"
                    ],
                    xmpExpo: {
                        title: "🔰 What is XMP/EXPO?",
                        description: "**XMP (Intel) / EXPO (AMD)** are memory profiles that activate your RAM's advertised speed. **By default, RAM runs at 2133MHz regardless of what you bought (3200MHz, 3600MHz, etc.)**. Enabling XMP/EXPO unlocks the full speed you paid for. **This is NOT overclocking** - it's enabling the manufacturer-tested speed.",
                        image: {
                            src: "/images/bios/xmp-setting.png",
                            alt: "XMP/EXPO BIOS Setting",
                            caption: ""
                        }
                    },
                    uefiLegacy: {
                        title: "🔰 UEFI vs Legacy Boot Mode",
                        description: "**UEFI Mode** (recommended): Modern boot standard, required for Windows 11. Uses GPT partitions, supports Secure Boot, faster boot times. **Legacy Mode**: Old standard using MBR partitions. Only use for older operating systems (Windows 7, etc.). **For Windows 11, you MUST use UEFI mode.**",
                        image: {
                            src: "/images/bios/boot-mode.png",
                            alt: "UEFI vs Legacy Boot Mode",
                            caption: ""
                        }
                    },
                    erp: {
                        title: "🔰 What is ERP Mode?",
                        description: "**ERP (Energy-Related Products)** is a low-power standby mode. When enabled, PC consumes <1W when shut down (vs 3-5W normally). **Downside**: Disables Wake-on-LAN and USB charging when PC is off. Enable if you want lowest power consumption, disable if you need WoL or USB charging."
                    }
                },
                checklist: [
                    "System powers on (fans spin, LEDs light)",
                    "POST successful (video output achieved)",
                    "No beep codes or debug LED errors",
                    "BIOS accessible",
                    "XMP/EXPO enabled (RAM running at rated speed)",
                    "Boot mode set to UEFI",
                    "Boot order configured (USB first for installation)"
                ]
            },
            os: {
                title: "OS Installation & Deployment",
                usbCreation: {
                    title: "Windows 11 USB Creation",
                    method1: "**Method 1: Official Microsoft Media Creation Tool** (Recommended for beginners) - Download from Microsoft.com/software-download/windows11. Select 'Create installation media for another PC'. Choose language, edition (Home/Pro), and 64-bit. Select USB flash drive (8GB+ required). Wait 15-30 minutes.",
                    method2: "**Method 2: Rufus** (Faster, Can Bypass TPM Requirements) - 💡 Rufus is faster and offers advanced options to bypass Windows 11's TPM and Secure Boot requirements for older hardware. Download from rufus.ie (official site). Download Windows 11 ISO from Microsoft.com. Run Rufus, select USB, click SELECT and choose ISO. Set Partition scheme: GPT, Target system: UEFI. Click START - Rufus will offer to remove TPM/Secure Boot requirements. Wait 5-10 minutes (much faster)."
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
                        "Wait for installation (20-40 minutes)",
                        "Complete user account setup"
                    ]
                },
                drivers: {
                    title: "Driver Installation (CRITICAL STEP)",
                    explanation: "💡 **Why not just use Windows Update?** While Windows Update installs basic drivers, they're often outdated and generic. Manufacturer drivers unlock full performance and features.",
                    order: [
                        "**Chipset Drivers** (FIRST - foundation): Download from motherboard manufacturer (ASUS, MSI, Gigabyte, ASRock). Enables proper CPU-motherboard communication.",
                        "**GPU Drivers**: NVIDIA (nvidia.com/drivers), AMD (amd.com/drivers). **DO NOT use Windows Update GPU drivers** - they're often very outdated.",
                        "**Audio Drivers**: Usually Realtek from motherboard manufacturer's support page.",
                        "**Network Drivers**: LAN/Wi-Fi from motherboard manufacturer.",
                        "**Peripheral Software** (if applicable): • **Corsair iCUE** for RGB RAM/fans/AIO/keyboards/mice (corsair.com) • **NZXT CAM** for cases/AIO/RGB (nzxt.com/camapp) • **Logitech G HUB** for gaming peripherals • **Razer Synapse** for Razer devices • **Armoury Crate** (ASUS) / **Dragon Center** (MSI) for motherboard RGB/fan control"
                    ]
                },
                postInstall: {
                    title: "Post-Installation Checklist",
                    critical: [
                        "Run Windows Update until no updates remain (check multiple times)",
                        "Install chipset drivers from motherboard manufacturer (FIRST)",
                        "Install GPU drivers from NVIDIA/AMD official site (NOT Windows Update)",
                        "Verify Device Manager shows no unknown devices (yellow triangle warnings)",
                        "Install audio drivers (test sound)",
                        "Install network drivers (test internet connection)",
                        "Install peripheral software (iCUE, NZXT CAM, etc.) if you have compatible hardware",
                        "**Stability Test**: Run **OCCT** (standard test) for 15-30 minutes to verify system stability."
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
                    "GPU drivers installed (official, not Windows Update)",
                    "Audio drivers installed and tested",
                    "Network drivers installed and connectivity verified",
                    "Peripheral software installed (iCUE, NZXT CAM, etc. if applicable)",
                    "Device Manager clean (no unknown devices)",
                    "Stress test passed (CPU and GPU stable)",
                    "Ready for deployment"
                ]
            }
        }
    },
    es: {
        siteName: "Guía de Campo: Estándar de Ensamblaje de PC",
        tagline: "Documentación Profesional de Construcción de PC",
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
                        "Usa pulsera ESD conectada a metal con toma de tierra",
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
                        "Aplica pasta térmica (punto del tamaño de un guisante en el centro) si no está pre-aplicada",
                        "Instala el refrigerador de CPU según instrucciones del fabricante",
                        "Conecta el cable del ventilador de CPU al conector CPU_FAN de la placa"
                    ],
                    image: {
                        src: "/images/cpu/cpu-installation.png",
                        alt: "Guía de Instalación de CPU",
                        caption: "Instalación de CPU - Alinear indicador de triángulo dorado"
                    }
                },
                ram: {
                    title: "Instalación de RAM",
                    explanation: "💡 **¿Por qué slots A2/B2?** Las placas modernas usan memoria dual-channel. Instalar RAM en slots A2 y B2 (2º y 4º slots) activa el modo dual-channel, que DUPLICA el ancho de banda de memoria para mejor rendimiento.",
                    steps: [
                        "Verifica el manual de la placa para ranuras DIMM correctas (usualmente A2/B2 para dual-channel)",
                        "Abre los clips de retención en ambos lados de la ranura",
                        "Alinea la muesca de la RAM con la llave de la ranura",
                        "Presiona firmemente hasta que los clips encajen",
                        "Verifica que ambos clips estén bloqueados"
                    ],
                    image: {
                        src: "/images/ram/ram-installation.png",
                        alt: "Guía de Instalación de RAM",
                        caption: "Instalación de RAM - Usar ranuras A2/B2 para dual-channel"
                    }
                },
                case: {
                    title: "Instalación de Placa Base en Gabinete",
                    steps: [
                        "Instala el panel I/O en el panel trasero del gabinete",
                        "Instala separadores de placa según el tamaño de tu placa (ATX/mATX/ITX)",
                        "Coloca cuidadosamente la placa, alineando con el panel I/O y separadores",
                        "Asegura con tornillos - no aprietes en exceso",
                        "Instala GPU si aplica (retira cubiertas de ranura PCIe primero)"
                    ],
                    image: {
                        src: "/images/motherboard/overview.png",
                        alt: "Descripción de Componentes de Placa Base",
                        caption: "Descripción General de Componentes de Placa Base"
                    }
                },
                checklist: [
                    "CPU instalada correctamente",
                    "Pasta térmica aplicada (tamaño guisante)",
                    "Cubierta de plástico del refrigerador REMOVIDA",
                    "Ventilador de CPU conectado",
                    "RAM instalada en ranuras correctas (A2/B2)",
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
                        src: "/images/cables/front-panel.png",
                        alt: "Guía de Conectores Panel Frontal",
                        caption: "Conectores del Panel Frontal y Polaridad"
                    }
                },
                power: {
                    title: "Cables de Fuente de Alimentación",
                    cables: [
                        "ATX 24 pines Principal (conector más grande, va a la placa base)",
                        "8 pines (4+4) CPU Power (¡Se divide! No confundir con cable GPU)",
                        "Alimentación PCIe para GPU: Puede ser 6, 8 (6+2) o 12VHPWR. NO usar daisy-chain (un cable para dos conectores) en gráficas potentes.",
                        "SATA para unidades de almacenamiento",
                        "Conectores de ventilador a los headers de la placa"
                    ],
                    image: {
                        src: "/images/cables/gpu-power-types.png",
                        alt: "Tipos de Conectores de Alimentación GPU",
                        caption: "Tipos de Conectores de Alimentación GPU"
                    }
                },
                fans: {
                    title: "Refrigeración y Ventiladores",
                    headers: [
                        "**CPU_FAN** (Obligatorio): Debes conectar el disipador aquí. El sistema puede no arrancar sin él.",
                        "**AIO_PUMP**: Optimizado para bombas de refrigeración líquida (funciona al 100% de velocidad).",
                        "**SYS_FAN / CHA_FAN**: Para ventiladores de caja. Velocidad controlable en BIOS."
                    ],
                    pwm: "**4 Pines PWM vs 3 Pines DC**: Los ventiladores de 4 pines permiten control preciso (PWM). Los de 3 pines se controlan por voltaje (menos preciso). Ambos encajan en conectores de 4 pines (la pestaña guía asegura la alineación).",
                    image: {
                        src: "/images/cables/fan-headers.png",
                        alt: "Headers Ventilador PWM vs DC",
                        caption: ""
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
                        src: "/images/cables/rgb-headers.png",
                        alt: "Headers 5V ARGB vs 12V RGB",
                        caption: ""
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
                        src: "/images/cables/cable-management.png",
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
                    "Unidades SATA/NVMe conectadas",
                    "Cables organizados y asegurados"
                ]
            },
            boot: {
                title: "Primer Arranque y Solución de Problemas",
                firstBoot: {
                    title: "Encendido Inicial",
                    steps: [
                        "Verifica todas las conexiones de alimentación",
                        "Asegura que el monitor esté conectado a la GPU (NO a la placa) si hay GPU instalada",
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
                            "Re-asienta la GPU y cables de alimentación",
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
                            "1. Apaga el PC y desconecta el cable de la fuente.",
                            "2. **Método A (fácil)**: Quita la pila de botón plateada (CR2032) durante 5 minutos, luego ponla de nuevo.",
                            "3. **Método B (rápido)**: Puentea los pines 'CLR_CMOS' con un destornillador o jumper durante 10 segundos.",
                            "4. Conecta y enciende. La BIOS estará reseteada a fábrica."
                        ],
                        image: {
                            src: "/images/bios/clear-cmos.png",
                            alt: "Cómo hacer Clear CMOS (Pila y Jumper)",
                            caption: ""
                        }
                    }
                },
                bios: {
                    title: "Configuración BIOS (Ajustes Esenciales)",
                    explanation: "💡 **BIOS (Sistema Básico de Entrada/Salida)** es el firmware que inicializa el hardware antes de que cargue Windows. Los sistemas modernos usan UEFI BIOS.",
                    steps: [
                        "Presiona DEL o F2 durante el arranque para entrar a BIOS (observa pantalla de inicio para la tecla)",
                        "Navega a la sección Memory/Overclocking",
                        "Activa XMP/EXPO para RAM (ver explicación detallada abajo)",
                        "Establece modo de arranque a UEFI (requerido para Windows 11)",
                        "Establece orden de arranque (USB primero para instalación Windows, luego tu SSD/HDD)",
                        "Opcional: Activa virtualización (VT-x/AMD-V) si usarás VMs o Docker",
                        "Guarda y sal (usualmente F10)"
                    ],
                    xmpExpo: {
                        title: "🔰 ¿Qué es XMP/EXPO?",
                        description: "**XMP (Intel) / EXPO (AMD)** son perfiles de memoria que activan la velocidad anunciada de tu RAM. **Por defecto, la RAM corre a 2133MHz sin importar lo que compraste (3200MHz, 3600MHz, etc.)**. Activar XMP/EXPO desbloquea la velocidad completa por la que pagaste. **Esto NO es overclocking** - es activar la velocidad testada por el fabricante.",
                        image: {
                            src: "/images/bios/xmp-setting.png",
                            alt: "Ajuste BIOS XMP/EXPO",
                            caption: ""
                        }
                    },
                    uefiLegacy: {
                        title: "🔰 UEFI vs Modo de Arranque Legacy",
                        description: "**Modo UEFI** (recomendado): Estándar de arranque moderno, requerido para Windows 11. Usa particiones GPT, soporta Secure Boot, tiempos de arranque más rápidos. **Modo Legacy**: Estándar antiguo usando particiones MBR. Solo usar para sistemas operativos antiguos (Windows 7, etc.). **Para Windows 11, DEBES usar modo UEFI.**",
                        image: {
                            src: "/images/bios/boot-mode.png",
                            alt: "Modo de Arranque UEFI vs Legacy",
                            caption: ""
                        }
                    },
                    erp: {
                        title: "🔰 ¿Qué es el Modo ERP?",
                        description: "**ERP (Productos Relacionados con Energía)** es un modo de espera de bajo consumo. Cuando está activado, el PC consume <1W cuando está apagado (vs 3-5W normalmente). **Desventaja**: Desactiva Wake-on-LAN y carga USB cuando el PC está apagado. Activa si quieres el menor consumo de energía, desactiva si necesitas WoL o carga USB."
                    }
                },
                checklist: [
                    "Sistema enciende (ventiladores giran, LEDs encienden)",
                    "POST exitoso (salida de video lograda)",
                    "Sin códigos de pitido o errores LED de debug",
                    "BIOS accesible",
                    "XMP/EXPO habilitado",
                    "Orden de arranque configurado"
                ]
            },
            os: {
                title: "Instalación SO y Despliegue",
                usbCreation: {
                    title: "Creación USB Windows 11",
                    method1: "**Método 1: Media Creation Tool Oficial de Microsoft** (Recomendado para principiantes) - Descarga de Microsoft.com/software-download/windows11. Selecciona 'Crear medios de instalación para otro PC'. Elige idioma, edición (Home/Pro) y 64-bit. Selecciona unidad flash USB (8GB+ requerido). Espera 15-30 minutos.",
                    method2: "**Método 2: Rufus** (Más Rápido, Puede Saltarse Requisitos TPM) - 💡 Rufus es más rápido y ofrece opciones avanzadas para saltarse los requisitos TPM y Secure Boot de Windows 11 para hardware antiguo. Descarga desde rufus.ie (sitio oficial). Descarga ISO Windows 11 de Microsoft.com. Ejecuta Rufus, selecciona tu USB. Haz clic en SELECT y elige tu ISO. Esquema partición: GPT, Sistema objetivo: UEFI. Haz clic START - Rufus ofrecerá quitar requisitos TPM/Secure Boot. Espera 5-10 minutos (mucho más rápido)."
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
                        "Espera la instalación (20-40 minutos)",
                        "Completa configuración cuenta de usuario"
                    ]
                },
                drivers: {
                    title: "Instalación de Drivers (PASO CRÍTICO)",
                    explanation: "💡 **¿Por qué no solo usar Windows Update?** Aunque Windows Update instala drivers básicos, a menudo están desactualizados y son genéricos. Los drivers del fabricante desbloquean rendimiento y características completas.",
                    order: [
                        "**Drivers Chipset** (PRIMERO - base para todo): Descarga del sitio web del fabricante de la placa base (ASUS, MSI, Gigabyte, ASRock). Permiten comunicación adecuada entre CPU y componentes de placa.",
                        "**Drivers GPU**: NVIDIA (nvidia.com/drivers), AMD (amd.com/drivers). **NO uses drivers GPU de Windows Update** - a menudo están muy desactualizados.",
                        "**Drivers Audio**: Usualmente Realtek de la página de soporte del fabricante de placa.",
                        "**Drivers Red**: LAN/Wi-Fi del fabricante de placa.",
                        "**Software Periféricos** (si aplica): • **Corsair iCUE** para RAM/ventiladores/AIOs/teclados/ratones RGB Corsair (corsair.com) • **NZXT CAM** para cajas/AIOs/RGB NZXT (nzxt.com/camapp) • **Logitech G HUB** para periféricos gaming Logitech • **Razer Synapse** para dispositivos Razer • **Armoury Crate** (ASUS) / **Dragon Center** (MSI) para control RGB/ventiladores placa"
                    ]
                },
                postInstall: {
                    title: "Lista Post-Instalación",
                    critical: [
                        "Ejecuta Windows Update hasta sin actualizaciones restantes (verifica múltiples veces)",
                        "Instala drivers chipset del fabricante placa base (PRIMERO)",
                        "Instala drivers GPU del sitio oficial NVIDIA/AMD (NO Windows Update)",
                        "Verifica que el Administrador Dispositivos no muestra dispositivos desconocidos (advertencias triángulo amarillo)",
                        "Instala drivers audio (prueba sonido)",
                        "Instala drivers red (prueba conexión internet)",
                        "Instala software periféricos (iCUE, NZXT CAM, etc.) si tienes hardware compatible",
                        "**Test de Estabilidad**: Ejecuta **OCCT** (prueba estándar) durante 15-30 minutos para verificar estabilidad total."
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
                    "Drivers de GPU instalados (oficial, no WU)",
                    "Administrador de Dispositivos limpio (sin dispositivos desconocidos)",
                    "Audio probado y funcionando",
                    "Conectividad de red verificada",
                    "Punto de restauración del sistema creado",
                    "Prueba de estrés aprobada",
                    "Listo para despliegue"
                ]
            }
        }
    },
    de: {
        siteName: "Außendienst-Leitfaden: PC-Zusammenbau-Standard",
        tagline: "Professionelle PC-Bau-Dokumentation",
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
                        "ESD-Armband tragen, mit geerdetem Metall verbunden",
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
                        "Wärmeleitpaste auftragen (erbsengroßer Punkt in der Mitte), falls nicht vorinstalliert",
                        "CPU-Kühler gemäß Herstelleranweisung installieren",
                        "CPU-Lüfterkabel an Mainboard CPU_FAN-Anschluss anschließen"
                    ],
                    image: {
                        src: "/images/cpu/cpu-installation.png",
                        alt: "CPU-Installationsanleitung",
                        caption: "CPU-Installation - Goldenes Dreieck ausrichten"
                    }
                },
                ram: {
                    title: "RAM-Installation",
                    explanation: "💡 **Warum A2/B2 Slots?** Moderne Mainboards nutzen Dual-Channel-Speicher. RAM in Slots A2 und B2 (2. und 4. Slot) installieren aktiviert Dual-Channel-Modus, der Speicherbandbreite VERDOPPELT für bessere Leistung.",
                    steps: [
                        "Mainboard-Handbuch für korrekte DIMM-Slots prüfen (üblicherweise A2/B2 für Dual-Channel)",
                        "Halteclips auf beiden Seiten des Slots öffnen",
                        "RAM-Kerbe mit Slot-Schlüssel ausrichten",
                        "Fest drücken, bis Clips einrasten",
                        "Beide Clips auf Verriegelung prüfen"
                    ],
                    image: {
                        src: "/images/ram/ram-installation.png",
                        alt: "RAM-Installationsanleitung",
                        caption: "RAM-Installation - A2/B2-Slots für Dual-Channel nutzen"
                    }
                },
                case: {
                    title: "Mainboard-Installation im Gehäuse",
                    steps: [
                        "I/O-Blende in rückwärtige Gehäuseöffnung einsetzen",
                        "Mainboard-Abstandshalter entsprechend Ihrer Board-Größe installieren (ATX/mATX/ITX)",
                        "Mainboard vorsichtig platzieren, mit I/O-Blende und Abstandshaltern ausrichten",
                        "Mit Schrauben sichern - nicht zu fest anziehen",
                        "GPU installieren, falls zutreffend (PCIe-Slotabdeckungen zuerst entfernen)"
                    ],
                    image: {
                        src: "/images/motherboard/overview.png",
                        alt: "Mainboard-Komponenten-Übersicht",
                        caption: "Mainboard-Komponenten-Übersicht"
                    }
                },
                checklist: [
                    "CPU korrekt installiert",
                    "Wärmeleitpaste aufgetragen (Erbsengröße)",
                    "Kühlerschutzfolie ENTFERNT",
                    "CPU-Lüfter angeschlossen",
                    "RAM in korrekten Slots eingesetzt (A2/B2)",
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
                        src: "/images/cables/front-panel.png",
                        alt: "Frontpanel-Anschluss-Anleitung",
                        caption: "Frontpanel-Anschlüsse & Polarität"
                    }
                },
                power: {
                    title: "Netzteilkabel",
                    cables: [
                        "24-poliges ATX-Hauptstromkabel (größter Stecker, geht zum Mainboard)",
                        "8-poliges (4+4) CPU-Stromkabel (Teilbar! Nicht mit GPU-Kabel verwechseln)",
                        "PCIe-Strom für GPU: Kann 6-Pin, 8-Pin (6+2) oder 12VHPWR sein. Daisy-Chain NICHT empfohlen für High-End-Karten.",
                        "SATA-Strom für Speicherlaufwerke",
                        "Lüfteranschlüsse an Mainboard-Buchsen"
                    ],
                    image: {
                        src: "/images/cables/gpu-power-types.png",
                        alt: "GPU-Stromanschluss-Typen",
                        caption: "GPU-Stromanschluss-Typen"
                    }
                },
                fans: {
                    title: "Kühlung & Lüfter",
                    headers: [
                        "**CPU_FAN** (Pflicht): CPU-Kühler muss hier angeschlossen werden. System startet sonst evtl. nicht.",
                        "**AIO_PUMP**: Optimiert für Wasserpumpen (läuft mit 100% Geschwindigkeit).",
                        "**SYS_FAN / CHA_FAN**: Für Gehäuselüfter. Geschwindigkeit im BIOS steuerbar."
                    ],
                    pwm: "**4-Pin PWM vs 3-Pin DC**: 4-Pin-Lüfter erlauben präzise Steuerung (PWM). 3-Pin-Lüfter werden über Spannung gesteuert (weniger präzise). Beide passen in 4-Pin-Header (Führungsnase sichert Ausrichtung).",
                    image: {
                        src: "/images/cables/fan-headers.png",
                        alt: "PWM vs DC Lüfter-Anschlüsse",
                        caption: ""
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
                        src: "/images/cables/rgb-headers.png",
                        alt: "5V ARGB vs 12V RGB Anschlüsse",
                        caption: ""
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
                        src: "/images/cables/cable-management.png",
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
                    "SATA/NVMe-Laufwerke verbunden",
                    "Kabel organisiert und gesichert"
                ]
            },
            boot: {
                title: "Erster Start & Fehlerbehebung",
                firstBoot: {
                    title: "Erstinbetriebnahme",
                    steps: [
                        "Alle Stromanschlüsse doppelt prüfen",
                        "Sicherstellen, dass Monitor an GPU angeschlossen ist (NICHT Mainboard), falls GPU installiert",
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
                            "GPU und Stromkabel neu einsetzen",
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
                            "1. PC ausschalten und Netzkabel ziehen.",
                            "2. **Methode A (einfach)**: Die runde silberne Batterie (CR2032) für 5 Minuten entfernen, dann wieder einsetzen.",
                            "3. **Methode B (schnell)**: Die 'CLR_CMOS'-Pins mit Schraubendreher oder Jumper für 10 Sekunden überbrücken.",
                            "4. Einstecken und einschalten. BIOS ist auf Werkseinstellungen zurückgesetzt."
                        ],
                        image: {
                            src: "/images/bios/clear-cmos.png",
                            alt: "Wie man CMOS zurücksetzt (Batterie & Jumper)",
                            caption: ""
                        }
                    }
                },
                bios: {
                    title: "BIOS-Konfiguration (Wesentliche Einstellungen)",
                    explanation: "💡 **BIOS (Basic Input/Output System)** ist Firmware die Hardware initialisiert bevor Windows lädt. Moderne Systeme nutzen UEFI-BIOS.",
                    steps: [
                        "DEL oder F2 während Boot drücken zum BIOS-Eintritt (Startbildschirm für Taste beachten)",
                        "Zu Memory/Overclocking-Bereich navigieren",
                        "XMP/EXPO für RAM aktivieren (detaillierte Erklärung unten)",
                        "Boot-Modus auf UEFI setzen (für Windows 11 erforderlich)",
                        "Boot-Reihenfolge setzen (USB zuerst für Windows-Installation, dann SSD/HDD)",
                        "Optional: Virtualisierung aktivieren (VT-x/AMD-V) falls VMs oder Docker genutzt",
                        "Speichern und beenden (meist F10)"
                    ],
                    xmpExpo: {
                        title: "🔰 Was ist XMP/EXPO?",
                        description: "**XMP (Intel) / EXPO (AMD)** sind Speicherprofile die beworbene RAM-Geschwindigkeit aktivieren. **Standardmäßig läuft RAM mit 2133MHz egal was gekauft wurde (3200MHz, 3600MHz, etc.)**. XMP/EXPO aktivieren schaltet volle bezahlte Geschwindigkeit frei. **Dies IST KEIN Übertakten** - es aktiviert die vom Hersteller getestete Geschwindigkeit.",
                        image: {
                            src: "/images/bios/xmp-setting.png",
                            alt: "XMP/EXPO BIOS-Einstellung",
                            caption: ""
                        }
                    },
                    uefiLegacy: {
                        title: "🔰 UEFI vs Legacy Boot-Modus",
                        description: "**UEFI-Modus** (empfohlen): Moderner Boot-Standard, für Windows 11 erforderlich. Nutzt GPT-Partitionen, unterstützt Secure Boot, schnellere Boot-Zeiten. **Legacy-Modus**: Alter Standard mit MBR-Partitionen. Nur für ältere Betriebssysteme (Windows 7, etc.). **Für Windows 11 MUSS UEFI-Modus genutzt werden.**",
                        image: {
                            src: "/images/bios/boot-mode.png",
                            alt: "UEFI vs Legacy Boot-Modus",
                            caption: ""
                        }
                    },
                    erp: {
                        title: "🔰 Was ist ERP-Modus?",
                        description: "**ERP (Energy-Related Products)** ist Niedrigstrom-Standby-Modus. Aktiviert verbraucht PC <1W wenn ausgeschaltet (vs 3-5W normal). **Nachteil**: Deaktiviert Wake-on-LAN und USB-Laden wenn PC aus. Aktivieren für niedrigsten Stromverbrauch, deaktivieren falls WoL oder USB-Laden benötigt."
                    }
                },
                checklist: [
                    "System startet (Lüfter drehen, LEDs leuchten)",
                    "POST erfolgreich (Bildausgabe erreicht)",
                    "Keine Piepton-Codes oder Debug-LED-Fehler",
                    "BIOS zugänglich",
                    "XMP/EXPO aktiviert",
                    "Boot-Reihenfolge konfiguriert"
                ]
            },
            os: {
                title: "OS-Installation & Bereitstellung",
                usbCreation: {
                    title: "Windows 11 USB-Erstellung",
                    method1: "**Methode 1: Offizielles Microsoft Media Creation Tool** (Empfohlen für Anfänger) - Von Microsoft.com/software-download/windows11 herunterladen. 'Installationsmedien für anderen PC erstellen' wählen. Sprache, Edition (Home/Pro) und 64-Bit wählen. USB-Flash-Laufwerk wählen (8GB+ erforderlich). 15-30 Minuten warten.",
                    method2: "**Methode 2: Rufus** (Schneller, Kann TPM-Anforderungen Umgehen) - 💡 Rufus ist schneller und bietet erweiterte Optionen um Windows 11 TPM- und Secure Boot-Anforderungen für ältere Hardware zu umgehen. Von rufus.ie herunterladen (offizielle Seite). Windows 11 ISO von Microsoft.com herunterladen. Rufus ausführen, USB wählen. SELECT klicken und ISO wählen. Partitionsschema: GPT, Zielsystem: UEFI. START klicken - Rufus bietet TPM/Secure Boot-Anforderungen zu entfernen an. 5-10 Minuten warten (viel schneller)."
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
                        "Auf Installation warten (20-40 Minuten)",
                        "Benutzerkonto-Einrichtung abschließen"
                    ]
                },
                drivers: {
                    title: "Treiber-Installation (KRITISCHER SCHRITT)",
                    explanation: "💡 **Warum nicht nur Windows Update nutzen?** Windows Update installiert zwar Basistreiber, diese sind jedoch oft veraltet und generisch. Hersteller-Treiber schalten volle Leistung und Features frei.",
                    order: [
                        "**Chipsatz-Treiber** (ZUERST - Grundlage für alles): Von Mainboard-Hersteller-Website herunterladen (ASUS, MSI, Gigabyte, ASRock). Ermöglichen ordnungsgemäße CPU-Mainboard-Kommunikation.",
                        "**GPU-Treiber**: NVIDIA (nvidia.com/drivers), AMD (amd.com/drivers). **KEINE Windows Update GPU-Treiber nutzen** - oft sehr veraltet.",
                        "**Audio-Treiber**: Meist Realtek von Mainboard-Hersteller-Support-Seite.",
                        "**Netzwerk-Treiber**: LAN/Wi-Fi von Mainboard-Hersteller.",
                        "**Peripherie-Software** (falls zutreffend): • **Corsair iCUE** für Corsair RGB-RAM/Lüfter/AIO/Tastaturen/Mäuse (corsair.com) • **NZXT CAM** für NZXT-Gehäuse/AIO/RGB (nzxt.com/camapp) • **Logitech G HUB** für Logitech-Gaming-Peripherie • **Razer Synapse** für Razer-Geräte • **Armoury Crate** (ASUS) / **Dragon Center** (MSI) für Mainboard-RGB/Lüfter-Steuerung"
                    ]
                },
                postInstall: {
                    title: "Nach-Installations-Checkliste",
                    critical: [
                        "Windows Update ausführen bis keine Updates verbleiben (mehrfach prüfen)",
                        "Chipsatz-Treiber von Mainboard-Hersteller installieren (ZUERST)",
                        "GPU-Treiber von offizieller NVIDIA/AMD-Seite installieren (NICHT Windows Update)",
                        "Geräte-Manager zeigt keine unbekannten Geräte prüfen (gelbe Dreieck-Warnungen)",
                        "Audio-Treiber installieren (Sound testen)",
                        "Netzwerk-Treiber installieren (Internet-Verbindung testen)",
                        "Peripherie-Software installieren (iCUE, NZXT CAM, etc.) falls kompatible Hardware vorhanden",
                        "Stresstest durchführen: CPU-Z für CPU, FurMark oder 3DMark für GPU - Stabilität prüfen"
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
                    "GPU-Treiber installiert (offiziell, nicht WU)",
                    "Geräte-Manager sauber (keine unbekannten Geräte)",
                    "Audio getestet und funktioniert",
                    "Netzwerkverbindung überprüft",
                    "Systemwiederherstellungspunkt erstellt",
                    "Stresstest bestanden",
                    "Bereit zur Bereitstellung"
                ]
            }
        }
    }
};

export const supportedLanguages = ['en', 'es', 'de'];

export const languageNames = {
    en: 'English',
    es: 'Español',
    de: 'Deutsch'
};
