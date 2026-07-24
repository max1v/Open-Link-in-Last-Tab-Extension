# Microsoft Edge Add-ons — Store Listing

Use this info when filling out the submission form at https://partner.microsoft.com.

---

## Name
Open in Last Tab

## Short description (132 chars max)
Right-click a link and open it at the very end of your tab strip — not next to the current tab.

## Long description
New tabs in Chrome and Edge open right next to your current tab by default. If you're researching, comparing products, or juggling many pages, this scatters related content across your tab strip and forces constant tab-dragging to reorder.

Open in Last Tab fixes this. Right-click any link and choose "Open in Last Tab" — the page opens at the far-right end of the tab strip, keeping your current context exactly where it is. When you're ready, the new tab is waiting at the end.

Features:
- One-click right-click menu item on any link
- Always places the link at the last position in the current window
- No configuration needed — install and go
- Lightweight: only runs when you use it
- No data collection, no tracking, no ads

Permissions explained:
- contextMenus: Adds the "Open in Last Tab" entry to your right-click menu on links
- tabs: Counts how many tabs are open so the new tab is placed correctly at the end

## Category
Productivity

## Store Assets (in store-assets/ folder)

| Asset | File | Required |
|-------|------|----------|
| Extension logo (300x300) | `logo-300x300.png` | Yes (min 128x128) |
| Screenshot (1280x800) | `screenshot-1280x800.png` | Yes |
| Small promo tile (440x280) | `promo-tile-440x280.png` | Recommended |
| Large promo tile (1400x560) | `promo-tile-1400x560.png` | Optional |

## Privacy page — Single Purpose Description
Paste this into the **Single Purpose Description** field:
> This extension lets users right-click any hyperlink and open it at the last (rightmost) position of the current browser window's tab strip. It does nothing else. It does not collect, store, or transmit any data.

## Privacy page — Permission Justifications
Paste these into the respective fields:

**contextMenus**: Required to add the "Open in Last Tab" item to the browser's right-click context menu when the user right-clicks a link. Without this permission, there is no way to trigger the extension.

**tabs**: Required to count the number of open tabs in the current window. The count is used to set the index of the new tab to `tabs.length`, placing it at the very end of the tab strip. Only the tab count is read — no tab URLs, titles, or content are accessed.

## Privacy page — Remote Code
Select **No, I am not using remote code**.

## Privacy page — Data Usage
- **What user data do you plan to collect?** — Select nothing (none).
- **Certifications** — Select all four:
  - I collect data to enable a specific feature...
  - I only transfer data...
  - I only use data...
  - I comply with all policies...

## Privacy page — Privacy Policy URL
```
https://github.com/max1v/Open-Link-in-Last-Tab-Extension/blob/main/PRIVACY.md
```

## Properties page
- **Category**: Productivity
- **Website**: https://github.com/max1v/Open-Link-in-Last-Tab-Extension
- **Support contact**: https://github.com/max1v/Open-Link-in-Last-Tab-Extension/issues
- **Mature content**: No

## Search terms (optional)
`tab, open tab, end tab, last tab, link, context menu, right click, tab position, organize tabs`

## Notes for certification
> No special setup required. Install the extension, right-click any link on any page, and select "Open in Last Tab". The link opens at the rightmost position of the tab strip.
