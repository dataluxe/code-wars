function abbrevName(name){
    var out = '';
    out += name.charAt(0).toUpperCase();
    out += '.'
    out += name.charAt(name.indexOf(" ") + 1).toUpperCase();
    return out
}
