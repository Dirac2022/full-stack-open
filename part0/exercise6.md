````mermaid
sequenceDiagram
    participant browser
    participant server

    Note left of server: send new note to server
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

    Note right of browser: Browser redraw items from 'ul' element to update de list
    browser->>browser: redrawNotes function in spa.js
```