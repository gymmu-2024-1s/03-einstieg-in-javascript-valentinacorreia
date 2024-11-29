import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]
    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
    } else {
      // auch E ignorieren

      result.push(currentElement)
    }
  }
  // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = [] // Das ist die Resultatsliste

  // Läuft Zeuchen für Zeichen über den ganzen Text
  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i]
    const currentUpperCaseLetter = currentLetter.toUpperCase()
    result.push(currentUpperCaseLetter)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      count = count + 1
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  // Erstelle eine zählervariable für die leerzeichen
  let count = 0

  // Überprüfe jedes Zeichen in der Eingabe
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      count = count + 1
    }
  }
  // Gib count + 1 zurück, weil es ein wort mehr gibt wie leerzeichen
  return count + 1
}

//Beispiel für den Aufruf
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  const result = []
  let hasUpperCaseLetter = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const upperCaseVersion = currentElement.toUpperCase()
    if (currentElement === ".") {
      // mache nichts
    } else if (currentElement === upperCaseVersion) {
      hasUpperCaseLetter = true
    }
  }

  return hasUpperCaseLetter
}

linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args.trim() //Entferne führende und nachfolgende Leerzeichen
  return /[+"@%&/)(?='éäöü!-_.:,;]/.test(input) //Überprüft, ob mindestens ein Grossbuchstaben vorhanden ist
}

// Beispiel für den Aufruf
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args.toLowerCase() // Konvertiere den Text in Kleinbuchstaben

  // Lösung kommt von KI
  // mit Variable.includes("text") kann getestet werden, ob die Zeichenkette "text" in der Variable vorkommt
  return input.includes("und")
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)
// TODO: Schreibe eine Function die testet ob das Wort "und" in einem Text vorkommt.
// TODO: Schreibe eine Function die alle "e" mit "3" ersetzt.

export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      //do nothing
      result.push(3) // 3 ersetzt "e"
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)
export function aufgabe09(args) {
  const input = args // Speichert den Wert von args in der Variable `input`, damit wird für uns klarer, was wir gerade bearbeiten.
  const result = []

  let is6long = false // Zählt ob derr Text 6 Zeichen lang ist oder nicht
  let count = 0 // Lässt den Anfang bei 0 starten

  for (let i = 0; i < input.length; i++) {
    // "i" ersetzt 0. Dann wird die Kurzform angewendet.
    const currentElement = input[i]
    count = count + 1
  }
  if (count === 6) {
    is6long = true // bestimmt ob die Zeichenzahl dieser Anzahl entspricht
  }
  return is6long
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)
export function aufgabe11(arg) {
  const input = arg
  // Erstelle eine Variable um den ASCII-Code zu speichern
  let asciiCode = null

  //Speichere den ASCII-Code vom ersten Zeichen
  asciiCode = input.charCodeAt(0)
  // Sollte "null" zurückgeben wenn mehr wie ein Zeichen gegeben sind
  if (input.length > 1) {
    return null

    // Sollte "null" zurückgeben wenn keine Eingabe gegeben ist
  } else if (input.length === 0) {
    return null
  }
  // Gib den ASCII-Code zurück
  return asciiCode
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(arg) {
  const input = arg
  const result = []
  // Erstelleeeine Variable um die Position des ersten e's zu speichern
  let firstEPosition = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Suche die Position des ersten e's
    if (currentElement === "e") {
      return i // er springt aus der Funktion raus, wenn e gefunden wird bricht es ab und es wird nicht mehr ausgeführt.
    }
  }
  return -1 // -1 zeigt an, dass es nicht in der Liste steht
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(arg) {
  const input = arg
  let lastIndex = -1
  // suche die position des letzten e's
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      lastIndex = i
    }
  }

  return lastIndex
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(arg) {
  const input = arg
  let count = 0
  // suche die position des dritten e's
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "e") {
      count++
    }
    if (count === 3) {
      return i
    }
  }
  return -1
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(arg) {
  const input = arg
  const result = []
  // lesen sie die Eingabe nur bis zum ersten Leerzeichen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      break
    }
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)
export function aufgabe16(args) {
  const input = args
  const result = []
  //lesen sie die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste ein, und den Resr als den zweiten Teil.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$") {
      break
    }
    result.push(currentElement)
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe19(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // sollte 'aa' heissen
    if (currentElement === "aa") {
      result.push("aa")
    }
  }
  //jedes Zeichen sollte verdoppelt werden
  for (let i = 0; i < result.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe22(args) {
  const input = args
  const result = []

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe24(args) {
  //Vertausche das erste und das letzte Zeichen
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(input[input.length - 1])
    } else if (i === input.length - 1) {
      result.push(input[0])
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe27(args) {
  const input = args
  const result = []
  // sollte testen ob die Eingabe eine Zahl ist
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement >= "0" && currentElement <= "9") {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)
