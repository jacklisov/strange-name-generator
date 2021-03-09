const glasn     = ["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w"]
const soglasn   = ["a","e","i","o","u","y"]

/* Generate nickname */
function generate(lenght = 4) {
    var result  = '' // result nickname

    for (i = 0; i < lenght; i++) {
        result += genSlog()
    }

    return result
}

/* Generate slogi */
function genSlog() {
    var glsn_num  = Math.random() * (glasn.length - 1)       // get random index of glasn arr
    var sglsn_num = Math.random() * (soglasn.length - 1)     // get random index of soglasn arr

    return glasn[Math.ceil(glsn_num)] + soglasn[Math.ceil(sglsn_num)]
}

/* Generate strange langauge text */
function genText(sentence_count = 7) {
    var result = ''
    var left = sentence_count
    
    while (left > 0) {
        result += genSentence(Math.random() * (8))
        left -= 1
    }

    console.log(result)
}

/** Generate sentence */
function genSentence(words_count = 5) {
    var isFirst = true
    var result = ''

    for (j = 0; j < words_count; j++) {
        var word = generate(Math.random() * (8))

        if (isFirst) {
            result += word.charAt(0).toUpperCase() + word.slice(1)
            isFirst = false
        } else {
            result += " " + word
        }
    }

    result += ". "
    isFirst = true

    return result
}
