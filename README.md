# Damas chinas

Damas chinas (Halma) en un tablero de ajedrez. Cada jugador tiene 8 peones en una esquina y gana quien los lleve antes a la esquina contraria.

**Jugar:** https://jcaselas-ship-it.github.io/damaschinas/

## Reglas
- **Posición inicial:** blancas en a1, b1, c1, a2, b2, c2, a3, b3; negras en la esquina simétrica (h8…). Empiezan las blancas.
- **Paso:** a una casilla vecina vacía, en cualquiera de las 8 direcciones.
- **Salto:** sobre un peón vecino (propio o rival) hasta la casilla vacía de detrás, en línea recta. Los saltos se pueden encadenar con el mismo peón y parar donde quieras. No se puede dar un paso y luego saltar.
- **No se come:** los saltos solo sirven para avanzar.
- **Victoria:** colocar los 8 peones en la esquina contraria.
- **Anti-bloqueo:** si la esquina de destino está llena y al menos un peón es tuyo, ganas. Si después de tu jugada 30 te queda algún peón en tu casa, pierdes.

## Modos
- 👥 Dos jugadores en el mismo dispositivo
- 🤖 Contra la máquina (Fácil, Medio, Difícil)
- 🌐 En red con [PeerJS](https://peerjs.com/): uno crea la partida y comparte un código de 4 letras

## Aspecto
5 tableros (Madera, Verde torneo, Azul, Mármol, Neón), 4 estilos de pieza (Peones, Fichas, Canicas, Neón), modo claro/oscuro y sonido activable. Las preferencias se guardan en el navegador.

Es una PWA: se puede instalar en el móvil o el ordenador y jugar sin conexión (salvo el modo en red).
