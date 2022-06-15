# Visual regression testing mit BackstopJS

## Schritte
1.  Alias für Docker
    ```
    alias backstop='docker run --rm -v $(pwd):/src backstopjs/backstopjs:6.1.0 "$@"'
    ```
1.  Konfiguration erzeugen
    ```
    backstop init
    ```
1.  Den Ordner `engine_scripts` aus `backstop_data` verschieben und `backstop_data` von der Versionierung ausschließen.
    Je nach Workflow kann es auch sinnvoll sein, den Ordner `backstop_data/bitmaps_reference` einzuchecken.
1.  Für mehr Möglichkeiten nutzen wir JavaScript statt JSON zur Konfiguration.
    BackstopJS muss nun mit dem Parameter `--config backstop.js` ausgeführt werden.


## Links
https://github.com/garris/BackstopJS/
https://hub.docker.com/r/backstopjs/backstopjs
