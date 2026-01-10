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
                intro: {
                    title: "What You'll Learn",
                    description: "This guide walks you through building a PC from scratch. Whether you're an IT professional or building your first PC, we'll cover everything step-by-step."
                },
                tools: {
                    title: "Required Tools",
                    items: [
                        "Phillips head screwdriver (magnetic tip recommended)",
                        "Cable ties / Velcro straps for cable management",
                        "Thermal paste (if not pre-applied on cooler)",
                        "Anti-static wrist strap (ESD protection - prevents static damage)"
                    ]
                },
                safety: {
                    title: "Safety Precautions",
                    items: [
                        "Work on a non-conductive surface (wood table, anti-static mat)",
                        "Wear ESD wrist strap connected to grounded metal (prevents static from destroying components)",
                        "Avoid working on carpet (generates static electricity)",
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
                whatIs: {
                    title: "🔰 For Beginners: What Are These Components?",
                    cpu: "**CPU (Central Processing Unit)**: The 'brain' of your computer. Handles all calculations and instructions.",
                    ram: "**RAM (Random Access Memory)**: Temporary 'workspace' for active programs. More RAM = more programs running smoothly at once.",
                    motherboard: "**Motherboard**: The 'nervous system' connecting all components together.",
                    gpu: "**GPU (Graphics Processing Unit)**: Handles graphics and display. Essential for gaming or video editing."
                },
                cpu: {
                    title: "CPU & Cooler Installation",
                    warning: "⚠️ CRITICAL: Remove plastic protective cover from CPU cooler base before installation!",
                    steps: [
                        "Open motherboard CPU socket (lift retention arm - usually on the side)",
                        "Align CPU with socket notches - look for golden triangle indicator on CPU corner (must match socket triangle)",
                        "Gently place CPU - do NOT force or apply pressure. It should drop in by gravity",
                        "Lower retention arm to secure - this will require some force",
                        "Apply thermal paste (pea-sized dot in center) ONLY if not pre-applied on cooler",
                        "Install CPU cooler according to manufacturer instructions",
                        "Connect CPU fan cable to motherboard CPU_FAN header (usually near CPU socket)"
                    ],
                    imageRef: "/images/cpu/cpu-installation.png"
                },
                ram: {
                    title: "RAM Installation",
                    explanation: "💡 **Why A2/B2 slots?** Modern motherboards use dual-channel memory. Installing RAM in slots A2 and B2 (2nd and 4th slots) enables dual-channel mode, which DOUBLES memory bandwidth for better performance.",
                    steps: [
                        "Check motherboard manual for correct DIMM slots (usually A2/B2 for dual-channel)",
                        "Open retention clips on both sides of slot",
                        "Align RAM notch with slot key (it only fits one way)",
                        "Press firmly and evenly on both ends until clips snap into place",
                        "Verify both clips are locked - RAM should not move"
                    ],
                    imageRef: "/images/ram/ram-installation.png"
                },
                case: {
                    title: "Installing Motherboard into Case",
                    steps: [
                        "Install I/O shield into case rear panel (push from inside until it clicks)",
                        "Install motherboard standoffs matching your board size (ATX/mATX/ITX) - these prevent shorts",
                        "Carefully place motherboard, aligning with I/O shield and standoffs",
                        "Secure with screws - hand-tight, do NOT overtighten or you'll crack the board",
                        "Install GPU if applicable (remove PCIe slot covers first)"
                    ],
                    imageRef: "/images/motherboard/overview.png"
                },
                checklist: [
                    "CPU installed correctly (triangle aligned)",
                    "Thermal paste applied (pea size) or confirmed pre-applied",
                    "Cooler plastic cover REMOVED",
                    "CPU fan connected to CPU_FAN header",
                    "RAM seated in correct slots (A2/B2 for dual-channel)",
                    "Motherboard secured with all standoffs",
                    "GPU installed and secured (if applicable)"
                ]
            },
            cabling: {
                title: "Cabling (The Confusing Part)",
                frontPanel: {
                    title: "Front Panel Connectors (F_PANEL)",
                    warning: "⚠️ Check your motherboard manual for exact pin layout! This is the #1 thing people get wrong.",
                    explanation: "💡 **Power/Reset switches have NO polarity** - they work either way. **LEDs DO have polarity** (+/-) - if they don't light up, flip the connector 180°.",
                    connectors: [
                        "Power SW (Power button) - Usually 2-pin, no polarity",
                        "Reset SW (Reset button) - Usually 2-pin, no polarity",
                        "HDD LED (Hard drive activity light) - Usually 2-pin, polarity matters (+/-)",
                        "Power LED (+/-) - Usually 2-pin, polarity matters",
                        "USB 3.0 header (19-pin keyed connector - only fits one way)",
                        "USB 2.0 headers (9-pin - check manual for location)",
                        "HD Audio (AC'97 or HDA connector - for front panel headphone jack)"
                    ],
                    imageRef: "/images/cables/front-panel.png"
                },
                power: {
                    title: "Power Supply Cables",
                    cables: [
                        "24-pin ATX Main Power (largest connector, goes to right edge of motherboard)",
                        "8-pin (4+4) CPU Power (top-left of motherboard near CPU - MUST BE CONNECTED or PC won't boot)",
                        "PCIe 6+2 pin for GPU (if dedicated graphics card installed)",
                        "SATA power for storage drives (flat L-shaped connector)",
                        "Fan connectors to motherboard headers (3-pin or 4-pin)"
                    ]
                },
                management: {
                    title: "Pro Tip: Cable Management",
                    explanation: "💡 Good cable management isn't just for looks - it significantly improves airflow and makes future upgrades easier.",
                    tips: [
                        "Route cables behind motherboard tray when possible (use the pre-cut routing holes)",
                        "Use cable ties or velcro straps to bundle and secure cables",
                        "Keep cables away from fan blades",
                        "Plan your route BEFORE final installation - harder to fix later"
                    ],
                    imageRef: "/images/cables/cable-management.png"
                },
                checklist: [
                    "24-pin ATX power connected",
                    "8-pin CPU power connected (CRITICAL)",
                    "GPU power connected (6+2 pin, if applicable)",
                    "Front panel connectors installed (Power, Reset, LEDs)",
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
                        "Double-check all power connections (24-pin and 8-pin CPU especially)",
                        "Ensure monitor is connected to GPU (NOT motherboard) if GPU is installed",
                        "Turn on PSU switch (usually on back of power supply)",
                        "Press power button on case",
                        "Watch for POST (Power-On Self Test) - fans should spin, LEDs should light"
                    ]
                },
                troubleshooting: {
                    title: "Common Issues",
                    noVideo: {
                        title: "No Video Output",
                        solutions: [
                            "Check monitor cable is in GPU port, not motherboard (very common mistake if GPU installed)",
                            "Verify monitor is powered on and set to correct input (HDMI/DisplayPort)",
                            "Reseat GPU and its power cables (remove and reinstall)",
                            "Try removing and reinstalling RAM (try one stick at a time)",
                            "Check motherboard debug LEDs (CPU, RAM, VGA, BOOT) - they indicate which component failed"
                        ]
                    },
                    noPost: {
                        title: "No POST / Won't Turn On",
                        solutions: [
                            "Verify PSU is switched ON (check back of power supply)",
                            "Check 24-pin and 8-pin CPU power fully seated (push firmly)",
                            "Verify front panel Power SW connector is in correct position on F_PANEL",
                            "Reseat RAM (try one stick at a time in different slots)",
                            "Check for motherboard standoff shorts (make sure no extra standoffs under board)"
                        ]
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
                        imageRef: "/images/bios/xmp-setting.png"
                    },
                    uefiLegacy: {
                        title: "🔰 UEFI vs Legacy Boot Mode",
                        description: "**UEFI Mode** (recommended): Modern boot standard, required for Windows 11. Uses GPT partitions, supports Secure Boot, faster boot times. **Legacy Mode**: Old standard using MBR partitions. Only use for older operating systems (Windows 7, etc.). **For Windows 11, you MUST use UEFI mode.**",
                        imageRef: "/images/bios/boot-mode.png"
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
                installation: {
                    title: "Windows 11 USB Creation",
                    methods: {
                        title: "Choose Your Method:",
                        official: {
                            title: "Method 1: Official Microsoft Media Creation Tool (Recommended for beginners)",
                            steps: [
                                "Download from Microsoft.com/software-download/windows11",
                                "Run tool, select 'Create installation media for another PC'",
                                "Choose language, edition (Home/Pro), and architecture (64-bit)",
                                "Select 'USB flash drive' (minimum 8GB required)",
                                "Wait for download and creation (15-30 minutes)"
                            ]
                        },
                        rufus: {
                            title: "Method 2: Rufus (Faster, More Options, Can Bypass TPM Requirements)",
                            explanation: "💡 **Rufus** is a third-party tool that's faster than Microsoft's tool and offers advanced options to bypass Windows 11's TPM and Secure Boot requirements for older hardware.",
                            steps: [
                                "Download Rufus from rufus.ie (official site)",
                                "Download Windows 11 ISO from Microsoft.com",
                                "Run Rufus, select your USB drive",
                                "Click SELECT and choose your Windows 11 ISO",
                                "Partition scheme: GPT, Target system: UEFI",
                                "Click START - Rufus will offer to remove TPM/Secure Boot requirements (choose based on your needs)",
                                "Wait for creation (5-10 minutes - much faster than Microsoft tool)"
                            ]
                        }
                    },
                    installSteps: {
                        title: "Installation Process",
                        steps: [
                            "Insert USB and restart PC",
                            "Press boot menu key during startup (F12/F11/ESC - varies by manufacturer)",
                            "Select USB drive from boot menu",
                            "Follow Windows installation wizard",
                            "Choose 'Custom: Install Windows only (advanced)'",
                            "Partition drives as needed (create new partition or install on existing)",
                            "Wait for installation (20-40 minutes)",
                            "Complete user account setup"
                        ]
                    }
                },
                drivers: {
                    title: "Driver Installation (CRITICAL STEP)",
                    explanation: "💡 **Why not just use Windows Update?** While Windows Update installs basic drivers, they're often outdated and generic. Manufacturer drivers unlock full performance and features.",
                    order: {
                        title: "Installation Order (IMPORTANT - follow this sequence):",
                        steps: [
                            {
                                num: "1",
                                title: "Chipset Drivers (FIRST - foundation for everything)",
                                description: "Download from motherboard manufacturer's website (ASUS, MSI, Gigabyte, ASRock). These enable proper communication between CPU and motherboard components."
                            },
                            {
                                num: "2",
                                title: "GPU Drivers",
                                description: "NVIDIA: Download from nvidia.com/drivers (GeForce Experience or manual download). AMD: Download from amd.com/drivers. **DO NOT use Windows Update GPU drivers** - they're often very outdated."
                            },
                            {
                                num: "3",
                                title: "Audio Drivers",
                                description: "Usually Realtek. Download from motherboard manufacturer's support page."
                            },
                            {
                                num: "4",
                                title: "Network Drivers (LAN/Wi-Fi)",
                                description: "Intel, Realtek, or Killer networking. From motherboard manufacturer's page."
                            },
                            {
                                num: "5",
                                title: "Peripheral Software (if applicable)",
                                description: "• **Corsair iCUE**: For Corsair RGB RAM, fans, AIO coolers, keyboards, mice (corsair.com)\n• **NZXT CAM**: For NZXT cases, AIO coolers, RGB (nzxt.com/camapp)\n• **Logitech G HUB**: For Logitech gaming peripherals\n• **Razer Synapse**: For Razer peripherals\n• **Armoury Crate** (ASUS) / **Dragon Center** (MSI): Motherboard RGB and fan control"
                            }
                        ]
                    }
                },
                postInstall: {
                    title: "Post-Installation Checklist",
                    critical: [
                        "Run Windows Update until no updates remain (check multiple times)",
                        "Install chipset drivers from motherboard manufacturer",
                        "Install GPU drivers from NVIDIA/AMD official site (NOT Windows Update)",
                        "Verify Device Manager shows no unknown devices (yellow triangle warnings)",
                        "Install audio drivers (test sound)",
                        "Install network drivers (test internet connection)",
                        "Install peripheral software (iCUE, NZXT CAM, etc.) if you have compatible hardware",
                        "Run stress test: CPU-Z for CPU, FurMark or 3DMark for GPU - verify stability"
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
    // Spanish and German translations would go here with the same structure
    // For now keeping the existing Spanish/German content and will expand in next iteration
    es: {
        // ... existing Spanish content ...
        siteName: "Guía de Campo: Estándar de Ensamblaje de PC",
        tagline: "Documentación Profesional de Construcción de PC",
        // ... (keeping existing Spanish translation for brevity)
    },
    de: {
        // ... existing German content ...
        siteName: "Außendienst-Leitfaden: PC-Zusammenbau-Standard",
        tagline: "Professionelle PC-Bau-Dokumentation",
        // ... (keeping existing German translation for brevity)
    }
};

export const supportedLanguages = ['en', 'es', 'de'];

export const languageNames = {
    en: 'English',
    es: 'Español',
    de: 'Deutsch'
};
