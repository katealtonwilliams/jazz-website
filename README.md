# Tanner and the Tones

A responsive static website for Manchester big band Tanner and the Tones. No build step
or package installation is required.

## Run locally

From this directory, start a local server:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Add a Google Calendar

The Gigs section in `index.html` currently links to the band's Linktree. To show gig
dates directly on the site:

1. In Google Calendar on a computer, open **Settings** (the gear icon), then choose
   **Add calendar** > **Create new calendar**. A separate calendar keeps personal
   events out of the public gig listing.
2. Add the band's public gigs to that calendar, including the date, time, venue, and
   any ticket link in the event description.
3. In Settings, select the new calendar under **Settings for my calendars**. Under
   **Access permissions for events**, enable **Make available to public**. Only do
   this for the dedicated gigs calendar: its events will be visible to anyone.
4. On that calendar's settings page, find **Integrate calendar** and copy the
   provided iframe embed code. If desired, adjust the calendar's appearance and
   display options before copying it.
5. In `index.html`, find the `<section>` with `id="gigs"`. Replace its existing
   paragraph with the copied `<iframe>...</iframe>` code. Add a descriptive `title`
   and `loading="lazy"` to the iframe if Google has not included them.
6. Run the site locally using the command above and check that the calendar loads
   and shows only the intended public events. Then deploy the updated site.

If the Google account is managed by an organisation, its administrator may prevent
public calendar sharing. In that case, ask the administrator or keep using the
Linktree link.