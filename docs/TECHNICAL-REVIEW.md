# Technical content review

Reviewed: 2026-09-22. The guide is introductory and model-specific manuals take precedence.

| Topic | Editorial decision | Primary source |
|---|---|---|
| XMP and EXPO | Describe as memory overclocking; default JEDEC speed varies; validate compatibility and stability. | [Intel XMP](https://www.intel.com/content/www/us/en/gaming/extreme-memory-profile-xmp.html), [AMD memory compatibility](https://www.amd.com/en/products/processors/ryzen-compatible-memory.html) |
| Windows 11 | State UEFI, Secure Boot capability, TPM 2.0 and compatible CPU; remove bypass instructions. | [Microsoft requirements](https://support.microsoft.com/en-us/windows/experience/compatibility/windows-11-system-requirements), [Microsoft installation media](https://support.microsoft.com/en-us/windows/deployment/install-upgrade/create-installation-media-for-windows) |
| GPU power | Include current 12V-2x6 wording and fully seated, unstrained connectors. | [PCI-SIG connector update](https://pcisig.com/PCI%20Express/ECN/Base/12V-2x6ConnectorUpdatestoPCIeBase_6.0), [Seasonic cable guidance](https://seasonic.com/insights/seasonic-native-12v-2x6-cable-guide/) |
| Modular PSU cables | Never assume cables from another PSU are compatible. | [Seasonic compatibility guide](https://seasonic.com/cable-compatibility/) |
| Clear CMOS | Disconnect mains power and follow the exact board manual, avoiding generic jumper timing or pin layout. | Model-specific motherboard manual required. |

The previous ChatGPT-generated diagrams are being replaced or retired where they make model-specific pin layouts or outdated specifications look universal. The new hero is illustrative, not an instruction for connector placement.
