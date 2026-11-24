# Tanner and the Tones

A responsive static website for Manchester big band Tanner and the Tones. No build step
or package installation is required.

## Run locally

From this directory, start a local server:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

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
7. **Booking form (Dev, with Marketing to confirm the inbox):** the site is static, so
   it can't send email on its own. Choose a form service and wire it into the Bookings
   section of `index.html`. Options: Web3Forms (free, needs an access key emailed to
   the band's address), Formspree (free tier, needs an account and form ID), or a plain
   `mailto:` link (no sign-up, but opens the visitor's email app). Until then, the
   **Book us** button and the Bookings email address still work.
8. **Open review items (Dev, with Marketing for the dates):** check these before launch.
   - Check the layout in a browser on phone and desktop widths, including the venue
     and gig boxes, since the last changes were not viewed in a browser.
   - Replace the missing hero image (`95328e6d-…jpg`), which was deleted, and confirm
     the slideshow doesn't include the main photo.
   - Confirm the past gig dates: Freight Island (house band, November and December
     2024, 2025 and 2026), Band on the Wall (10 January 2025 and 18 April 2026), and
     Academy 3 (11 November 2025). Confirm the Old Abbey Taphouse date (4 October 2024).
   - Replace the two **Date TBC** placeholders in the gig list with real gigs and
     ticket links.
   - Confirm the Old Abbey Taphouse website link, which came from a third-party listing.
