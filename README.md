# Open in Last Tab

> Right-click any link and open it at the very end of your tab strip — not next to the current tab.

[![Microsoft Edge Add-ons](https://img.shields.io/badge/Edge%20Add--ons-Get%20Extension-0078D7?logo=microsoftedge)](https://microsoftedge.microsoft.com/addons/)

## Why?

Chrome and Edge open new tabs right next to the current one by default. If you're researching, comparing pages, or working with many tabs, this scatters related content and forces constant tab-dragging to reorder.

**Open in Last Tab** always places the link at position 0 of the tab strip — the last tab in the window. Your current context stays exactly where it is, and the new page waits at the end until you're ready.

## How it works

1. Right-click any link
2. Select **Open in Last Tab**
3. The page opens at the far-right end of your tab strip

## Permissions

| Permission | Why it's needed |
|------------|-----------------|
| `contextMenus` | Adds the right-click menu item on links |
| `tabs` | Counts open tabs so the new tab is placed at the end |

No data is collected, stored, or transmitted. See [PRIVACY.md](PRIVACY.md).

## Install

### Microsoft Edge
[Get it from Edge Add-ons](https://microsoftedge.microsoft.com/addons/) (coming soon)

### Manual (developer mode)
1. Download the [latest ZIP](https://github.com/YOUR_USERNAME/open-in-last-tab/releases)
2. Go to `edge://extensions` and enable **Developer mode**
3. Drag and drop the ZIP onto the page

## Build from source

```bash
git clone https://github.com/YOUR_USERNAME/open-in-last-tab.git
cd open-in-last-tab
```
Load the folder as an unpacked extension at `edge://extensions`.

## Changelog

### v1.0
- Initial release
- Context menu item on links
- Opens link at the last tab of the current window
