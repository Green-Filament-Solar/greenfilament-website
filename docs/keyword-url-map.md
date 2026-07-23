# Green Filament — Keyword to URL Map

Single source of truth before creating any new page. Check this file first to avoid keyword cannibalization. Update the Status column as pages move from Planned to Ready to Live.

Slug convention: short and readable, keywords in title/H1/content instead of the URL. Example: `/rooftop-solar-cuttack`, not `/rooftop-solar-installation-cuttack`.

| Status | Primary Keyword | Secondary Keywords | URL | Intent | Notes |
|---|---|---|---|---|---|
| ✅ Live | Solar Company Odisha | Solar Panel Company Odisha, Solar Energy Company Odisha | `/solar-company-odisha` | Company | Flagship page. Do not duplicate with city-level "Solar Company in X" pages. |
| ✅ Live | Rooftop Solar Installation Bhubaneswar | Solar Rooftop Bhubaneswar, Solar Panel Installation Bhubaneswar | `/rooftop-solar-bhubaneswar` | Service + City | |
| 🟡 Ready | Rooftop Solar Installation Cuttack | Rooftop Solar Cuttack | `/rooftop-solar-cuttack` | Service + City | Pending deployment |
| 🔴 Planned | Rooftop Solar Installation Puri | Rooftop Solar Puri | `/rooftop-solar-puri` | Service + City | Next up |
| 🔴 Planned | Solar Street Light Installation | Street Light Installation | `/solar-street-light-installation` | Service | Check against existing `/solar-street-lighting` page content first — avoid duplication |
| 🔴 Planned | Solar Street Light Supplier | Street Light Supplier India | `/solar-street-light-supplier` | Commercial | Must differentiate from Manufacturer positioning: bulk orders, dealer network, ready stock |
| 🔴 Planned | PM Surya Ghar Odisha | PM Surya Ghar subsidy Odisha | `/pm-surya-ghar-odisha` | Informational-Commercial | Scheme-focused page |
| ⚪ On Hold | Solar EPC Company Odisha | — | — | — | Risk: overlaps with flagship company page. Expand existing page with an EPC section instead of new page. |
| ⚪ On Hold | Solar Street Light Manufacturer Odisha | — | — | — | Check if `/solar-street-lighting` already covers this intent before building separately |
| ⚪ On Hold | Rooftop Solar Odisha (statewide) | — | — | — | Skip — redundant with flagship company page's rooftop content. Use city pages instead. |
| 🔴 Planned | Solar Water Pump (pillar) | — | `/solar-water-pump` | Product/Service | Already live — treat as pillar page for pump-related content |
| 🔴 Planned | BLDC Solar Water Pump | — | `/bldc-solar-water-pump` | Product-specific | Tier 2 |
| 🔴 Planned | PM Kusum Solar Water Pump Odisha | — | `/pm-kusum-odisha` | Scheme-focused | Tier 2/3 |
| 🔴 Planned | Solar High Mast Light | — | `/high-mast-lighting` | Product | Tier 2 — also referenced on homepage Products section, currently links to /connect only |
| 🔴 Planned | Solar Drinking Water System | — | — | Product | Tier 2 |
| 🔴 Planned | Solar Cold Storage | — | — | Product | Tier 3 — also referenced on homepage Products section, currently links to /connect only |
| 🔴 Planned | Solar CCTV Tower | — | — | Product | Tier 3, new addition |
| 🔴 Planned | Solar Home Lighting System | — | — | Product | Tier 3, new addition |
| 🔴 Planned | Solar Street Light AMC & Maintenance | — | — | Service | Tier 3 |

---

## Next sprint build order

1. Rooftop Solar Puri
2. Solar Street Light Installation
3. Solar Street Light Supplier
4. PM Surya Ghar Odisha

## After Tier 1 ships — pause new pages, strengthen what exists

- Internal links from blogs and related service pages to these new pages
- Breadcrumbs
- Cross-links between city pages (Bhubaneswar ↔ Cuttack ↔ Puri)
- Schema + FAQ on every new page (already standard practice going forward)
- Strong CTA on every page