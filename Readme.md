# Visual regression testing mit BackstopJS

## Schritte
1.  Alias für Docker
    ```
    alias backstop='docker run --rm -v $(pwd):/src backstopjs/backstopjs "$@"'
    ```
1.  Konfiguration erzeugen
    ```
    backstop init
    ```

## Links
https://github.com/garris/BackstopJS/
https://hub.docker.com/r/backstopjs/backstopjs
