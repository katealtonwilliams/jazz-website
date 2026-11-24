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

## Items to confirm before launch

Owner: **Dev** means a code or hosting change. **Marketing** means band-side content
or design sign-off.

1. **Content (Marketing):** confirm the bio text, the players list, the past gigs
   (including The Old Abbey Taphouse, 4 October 2024), the enquiries email
   (`tannerandthetones@gmail.com` or `team@tannerandthetones.co.uk`), and the company
   name in the footer (Tones Music Ltd). Check the wording of the contact page, which
   could not be read.
2. **Colour scheme (Marketing):** confirm the terracotta, cream and black palette
   matches the poster. Dev can then adjust the values in `:root` in `styles.css`.
3. **Pictures (Marketing, with Dev for the file work):** confirm the photo captions and
   alt text match each photo. Confirm the player photos to add to `players.html`.
   Dev can compress `IMG_1140.JPG`, which is 3.7 MB.
4. **How to host (Dev):** confirm GitHub Pages is the choice, enable it in the repo
   settings, and decide whether to use a custom domain such as
   `tannerandthetones.co.uk`. Dev makes the DNS change, which will replace the current
   WordPress site on that domain.
5. **Integrating Google Calendar (Dev, with Marketing for the events):** Marketing
   creates and maintains the gig events and the public calendar. Dev then pastes the
   iframe embed into the Gigs section, following the steps above.
6. **Pages vs everything on the front page (Marketing):** decide whether the site
   should stay on one scrolling page, or whether separate pages (for example Players,
   Gigs or Contact) are wanted. The players page is already separate. Dev then makes
   any remaining split.
