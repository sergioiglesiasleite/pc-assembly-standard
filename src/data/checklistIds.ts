export const checklistIds = {
  prep: ['tools', 'workspace', 'esd', 'inventory'],
  hardware: ['cpu', 'thermal-interface', 'cooler-cover', 'cpu-fan', 'ram-slots', 'standoffs', 'gpu'],
  cabling: ['atx-power', 'cpu-power', 'gpu-power', 'front-panel', 'usb', 'audio', 'drives', 'cable-routing'],
  boot: ['power-on', 'post', 'diagnostics', 'firmware-access', 'memory-profile', 'uefi-requirements', 'boot-order'],
  os: ['os-installed', 'updates', 'chipset', 'graphics', 'device-manager', 'audio', 'network', 'restore-point', 'stability', 'ready'],
} as const;

export type ChecklistSection = keyof typeof checklistIds;
