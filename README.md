# LifeAt.io

A browser-based lo-fi listening and focus workspace. LifeAt.io combines a 100-station radio library with animated scene artwork, ambient effects, and lightweight productivity tools in a single-page experience.

## Features

- 100 built-in themed stations with artwork and internet radio streams.
- Compact bottom-left player with play/pause, previous/next, shuffle, volume, and mute controls.
- Searchable station drawer.
- Animated station backgrounds, canvas weather effects, audio visualizer, and playback-reactive neon player animations.
- Optional procedural lo-fi synth mode and ambient rain, vinyl, and wind mixer.
- Pomodoro timer, notes scratchpad, and to-do list.
- Add a local audio file as a custom station, with an optional image or GIF.
- Keyboard shortcuts and fullscreen mode.
- Installable PWA metadata and service worker.
- Preferences, notes, and tasks saved in the current browser's local storage.

## Run locally

The site has no build step or npm dependencies. Serve the `website` directory over HTTP (recommended for service-worker support):

```sh
python3 -m http.server 8000 --directory website
```

Then open <http://localhost:8000>.

You can also open `website/index.html` directly, but some browser features such as service workers require HTTP or HTTPS.

## Deploy to Vercel

The root `vercel.json` publishes the `website` directory as a static site; there is no framework build step.

1. Import this GitHub repository into Vercel.
2. Keep the project root at the repository root.
3. Use the **Other** framework preset (or no framework) and leave the build command empty.
4. Deploy. Subsequent pushes to the connected production branch will trigger deployments.

Vercel will provide a `*.vercel.app` URL. A custom domain can be configured in the Vercel project settings.

## Using the player

Select **PRESS ANY KEY OR CLICK TO START** once to enable audio playback in the browser. Choose a station with the library button, or use the player controls at the lower-left.

| Key | Action |
| --- | --- |
| `Space` | Play or pause |
| `←` / `→` | Previous or next station |
| `↑` / `↓` | Increase or decrease volume |
| `M` | Toggle mute |
| `S` or `G` | Open or close the station library |
| `A` | Open or close the ambient sound mixer |
| `P` | Open or close the Pomodoro timer |
| `C` | Toggle CRT effect |
| `N` | Toggle notes and to-do widget |
| `F` | Toggle fullscreen |
| `?` or `H` | Show or hide keyboard shortcuts |

Keyboard shortcuts are ignored while typing in text fields.

## Project layout

```text
.
├── README.md
├── vercel.json
└── website/
    ├── index.html    # App markup, styles, station data, and application logic
    ├── manifest.json # Installable-app metadata
    └── sw.js         # Service worker registration and fetch handling
```

## External services and privacy

- Radio audio is streamed from SomaFM; continuous availability depends on the radio provider and network connection.
- Fonts, utility CSS, and icons load from Google Fonts, Tailwind CDN, and Lucide CDN.
- Station artwork is loaded from remote image CDNs, including Pixabay and Unsplash.
- The app has no application server or account system. Preferences, notes, and to-do items stay in browser local storage.
- Custom station audio and images are selected locally and used in the current page session; they are not uploaded to this project or persisted as library entries.
- A network connection is needed for hosted fonts, styles, artwork, and radio streams. The service worker does not make the radio or full site available offline.

## License

No separate project license is currently included. The third-party services and media remain subject to their own terms and licenses.
