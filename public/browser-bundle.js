(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports.craftings = [];

class Craft {
  constructor(id, chance, qty) {
    this.id = id;
    this.chance = chance || 100;
    this.qty = qty || 1;
    this.items = [];
    module.exports.craftings.push(this);
  }
  
  add(arr) {
    this.items = this.items.concat(arr);
  }
  
}

new Craft('I0A7', 100.0).add(["I05Y"]);


new Craft('I0A7', 100.0).add(["I034"]);


new Craft('I0A7', 100.0).add(["I065"]);


new Craft('I0A7', 100.0).add(["I06A"]);


new Craft('I0A8', 100.0).add(["I06Z"]);


new Craft('I0A8', 100.0).add(["I06I"]);


new Craft('I0A9', 100.0).add(["I04H"]);


new Craft('I0A9', 100.0).add(["I033"]);


new Craft('I0A9', 100.0).add(["I07K"]);


new Craft('I0A9', 100.0).add(["I07X"]);


new Craft('I0A9', 100.0).add(["I0CR"]);


new Craft('I0A9', 100.0, 2).add(["I0EA"]);


new Craft('I0EG', 100.0).add(["I0A3", "I0LI", "I00R", "I0FB", "I0A9", "I0A9", "I0LO"]);


new Craft('I0EH', 100.0).add(["I09Z", "I0LI", "I00R", "I0LO", "I0A9", "I0A9", "I0FB"]);


new Craft('I0EI', 100.0).add(["I0A2", "I0LI", "I00R", "I0LO", "I0A9", "I0A9", "I0FB"]);


new Craft('I0EJ', 100.0).add(["I0A1", "I0LI", "I00R", "I0LO", "I0A9", "I0A9", "I0FB"]);


new Craft('I0EK', 100.0).add(["I0A0", "I0LI", "I00R", "I0LO", "I0A9", "I0A9", "I0FB"]);


new Craft('I0EL', 100.0).add(["I03C", "I0LI", "I00R", "I0LO", "I0A9", "I0A9", "I0FB"]);


new Craft('I07P', 100.0).add(["I03Z", "I03Y"]);


new Craft('I0BV', 100.0).add(["I05U", "I0A7"]);


new Craft('I03Q', 100.0).add(["I03Y", "I03E", "I0A7"]);


new Craft('I060', 100.0).add(["I05U", "I03E", "I0A7"]);


new Craft('I078', 100.0).add(["I064", "I0A7", "I05U"]);


new Craft('I07S', 100.0).add(["I07P", "I0A7", "I0A8"]);


new Craft('I0BW', 100.0).add(["I0OU", "I0A7", "I0A7"]);


new Craft('I07U', 100.0).add(["I061", "I0A7", "I0A8"]);


new Craft('I07V', 100.0).add(["I063", "I0A7", "I0A8"]);


new Craft('I07W', 100.0).add(["I064", "I0A7", "I0A8"]);


new Craft('I06D', 100.0).add(["I067", "I03Y", "I0A8", "I0A7"]);


new Craft('I06C', 100.0).add(["I067", "I03E", "I0A8", "I0A7"]);


new Craft('I06E', 100.0).add(["I067", "I05U", "I0A8", "I0A7"]);


new Craft('I06M', 100.0).add(["I03Q", "I0A7", "I0A8"]);


new Craft('I06N', 100.0).add(["I060", "I0A8", "I0A7"]);


new Craft('I07A', 100.0).add(["I078", "I0A7", "I0A8"]);


new Craft('I06K', 100.0).add(["I066", "I0A7", "I0A8", "I0A8"]);


new Craft('I06P', 100.0).add(["I03A", "I0A7", "I0A8"]);


new Craft('I06Q', 100.0).add(["I03D", "I0A7", "I0A8"]);


new Craft('I06O', 100.0).add(["I03Z", "I0A7", "I0A8"]);


new Craft('I074', 100.0).add(["I06D", "I06O", "I0A8", "I0A8", "I0A7"]);


new Craft('I0CD', 100.0).add(["I06C", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I075', 100.0).add(["I06Q", "I06E", "I0A7", "I0A7", "I0A8"]);


new Craft('I073', 100.0).add(["I06P", "I03A", "I0A8", "I0A8", "I0A7"]);


new Craft('I07T', 100.0).add(["I0A8", "I0A8", "I0A7", "I0A7", "I07S"]);


new Craft('I0BX', 100.0).add(["I0BW", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I0BZ', 100.0).add(["I06X", "I0A8", "I0A7"]);


new Craft('I07B', 100.0).add(["I06Q", "I07A", "I0A8", "I0A8", "I0A7"]);


new Craft('I07D', 100.0).add(["I06M", "I06P", "I0A8", "I0A8", "I0A7"]);


new Craft('I07E', 100.0).add(["I06N", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I085', 100.0).add(["I07W", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I083', 100.0).add(["I07V", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I084', 100.0).add(["I07U", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I07Y', 100.0).add(["I06K", "I0A9", "I0A9", "I0A9"]);


new Craft('I07Z', 100.0).add(["I07T", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BY', 100.0).add(["I0BX", "I0A9", "I0A9", "I0A9"]);


new Craft('I0C0', 100.0).add(["I0BZ", "I0A9", "I0A9", "I0A9"]);


new Craft('I08R', 100.0).add(["I073", "I0A9", "I0A9", "I0A9"]);


new Craft('I08S', 100.0).add(["I07B", "I0A9", "I0A9", "I0A9"]);


new Craft('I08T', 100.0).add(["I07C", "I0A9", "I0A9", "I0A9"]);


new Craft('I08V', 100.0).add(["I074", "I0A9", "I0A9", "I0A9"]);


new Craft('I0CE', 100.0).add(["I0CD", "I0A9", "I0A9", "I0A9"]);


new Craft('I08W', 100.0).add(["I07O", "I0A9", "I0A9", "I0A9"]);


new Craft('I08Y', 100.0).add(["I07D", "I0A9", "I0A9", "I0A9"]);


new Craft('I095', 100.0).add(["I07E", "I0A9", "I0A9", "I0A9"]);


new Craft('I094', 100.0).add(["I075", "I0A9", "I0A9", "I0A9"]);


new Craft('I09T', 100.0).add(["I084", "I0A9", "I0A9", "I0A9"]);


new Craft('I09U', 100.0).add(["I083", "I0A9", "I0A9", "I0A9"]);


new Craft('I09V', 100.0).add(["I085", "I0A9", "I0A9", "I0A9"]);


new Craft('I047', 100.0).add(["I0D7", "I0A9", "I0A9", "I0A9"]);


new Craft('I04F', 100.0).add(["I0D8", "I0A9", "I0A9", "I0A9"]);


new Craft('I039', 100.0).add(["I0D6", "I0A9", "I0A9", "I0A9"]);


new Craft('I089', 100.0).add(["I040", "I0A7"]);


new Craft('I08J', 100.0).add(["I04M", "I04M", "I0A7", "I0A7"]);


new Craft('I08I', 100.0).add(["I05V", "I05V", "I0A7", "I0A7"]);


new Craft('I08K', 100.0).add(["I040", "I040", "I0A7", "I0A7"]);


new Craft('I06B', 100.0).add(["I062", "I0A7", "I0A7"]);


new Craft('I08A', 100.0).add(["I089", "I0A7", "I0A7"]);


new Craft('I06R', 100.0).add(["I041", "I0A7", "I0A8"]);


new Craft('I06S', 100.0).add(["I03I", "I0A7", "I0A8"]);


new Craft('I08M', 100.0).add(["I08J", "I0A7", "I0A8"]);


new Craft('I08L', 100.0).add(["I08I", "I0A8", "I0A8"]);


new Craft('I08N', 100.0).add(["I08K", "I0A8", "I0A8"]);


new Craft('I03H', 100.0).add(["I06R", "I0A8", "I0A7", "I0A7"]);


new Craft('I042', 100.0).add(["I06S", "I0A8", "I0A7", "I0A7"]);


new Craft('I0G8', 100.0).add(["I08A", "I0A8", "I0A8"]);


new Craft('I07N', 100.0).add(["I03I", "I0A8", "I0A8"]);


new Craft('I0B8', 100.0).add(["I06T", "I0A8", "I0A8", "I03J"]);


new Craft('I0B7', 100.0).add(["I051", "I0A8", "I0A8", "I041"]);


new Craft('I0B9', 100.0).add(["I0B6", "I0A8", "I0A8", "I03I"]);


new Craft('I0BJ', 100.0).add(["I06B", "I0A8", "I0A8"]);


new Craft('I08O', 100.0).add(["I08L", "I0A8", "I0A8"]);


new Craft('I08P', 100.0).add(["I08M", "I0A8", "I0A8"]);


new Craft('I08Q', 100.0).add(["I08N", "I0A8", "I0A8"]);


new Craft('I0BL', 100.0).add(["I03H", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BM', 100.0).add(["I042", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BN', 100.0).add(["I082", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BO', 100.0).add(["I07N", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BK', 100.0).add(["I0BJ", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BA', 100.0).add(["I0B8", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BB', 100.0).add(["I0B7", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BC', 100.0).add(["I0B9", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BH', 100.0).add(["I08O", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BI', 100.0).add(["I08P", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BG', 100.0).add(["I08Q", "I0A9", "I0A9", "I0A9"]);


new Craft('I0G9', 100.0).add(["I0G8", "I0A9", "I0A9", "I0A9"]);


new Craft('I0E3', 100.0).add(["I0DF", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0E2', 100.0).add(["I0DE", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0E4', 100.0).add(["I0DD", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0DZ', 100.0).add(["I0DM", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0E0', 100.0).add(["I0DK", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0E1', 100.0).add(["I0DJ", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0E7', 100.0).add(["I0DG", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0E8', 100.0).add(["I0DH", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0E9', 100.0).add(["I0DI", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0E6', 100.0).add(["I0DL", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0E5', 100.0).add(["I0DC", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0GB', 100.0).add(["I0GA", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I03L', 100.0).add(["I0A7", "I0A7", "I03K"]);


new Craft('I044', 100.0).add(["I0A7", "I0A7", "I043"]);


new Craft('I0GM', 100.0).add(["I043", "I0A7", "I0A7"]);


new Craft('I04X', 100.0).add(["I03M", "I0A7", "I0A8"]);


new Craft('I06W', 100.0).add(["I044", "I0A7", "I0A8"]);


new Craft('I06U', 100.0).add(["I03L", "I0A7", "I0A8"]);


new Craft('I0GN', 100.0).add(["I0GM", "I0A7", "I0A8"]);


new Craft('I07J', 100.0).add(["I06W", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I0IF', 100.0).add(["I04X", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I08B', 100.0).add(["I06U", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I08C', 100.0).add(["I06W", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I0GO', 100.0).add(["I0GN", "I0A8", "I0A8", "I0A7"]);


new Craft('I08F', 100.0).add(["I07J", "I0A9", "I0A9", "I0A9", "I043"]);


new Craft('I08E', 100.0).add(["I08C", "I0A9", "I0A9", "I0A9", "I03K"]);


new Craft('I0GP', 100.0).add(["I0GO", "I0A9", "I0A9", "I0A9"]);


new Craft('I08D', 100.0).add(["I08B", "I0A9", "I0A9", "I0A9", "I043"]);


new Craft('I0IG', 100.0).add(["I0IF", "I0A9", "I0A9", "I0A9"]);


new Craft('I0I9', 100.0).add(["I081", "I0A9", "I0A9", "I0A9"]);


new Craft('I0CK', 100.0).add(["I0A9", "I0A9", "I0A9", "I07G"]);


new Craft('I0CL', 100.0).add(["I0A9", "I0A9", "I0A9", "I045"]);


new Craft('I0EE', 100.0).add(["I0DN", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0EC', 100.0).add(["I0DP", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0EB', 100.0).add(["I0DR", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0ED', 100.0).add(["I0DO", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0EF', 100.0).add(["I0DQ", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0GR', 100.0).add(["I0GQ", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0IK', 100.0).add(["I0IJ", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0II', 100.0).add(["I0IH", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I03S', 100.0).add(["I069", "I0A7", "I0A8"]);


new Craft('I04S', 100.0).add(["I04Y", "I0A7", "I0A8"]);


new Craft('I04R', 100.0).add(["I046", "I0A7", "I0A8"]);


new Craft('I03R', 100.0).add(["I04R", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I07I', 100.0).add(["I04S", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I07H', 100.0).add(["I03S", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I0CJ', 100.0).add(["I06G", "I0A8", "I0A8", "I0A7"]);


new Craft('I08X', 100.0).add(["I04D", "I06V"]);


new Craft('I0CV', 100.0).add(["I0CJ", "I0A9", "I0A9"]);


new Craft('I0CX', 100.0).add(["I03R", "I0A9", "I0A9"]);


new Craft('I0CT', 100.0).add(["I07H", "I0A9", "I0A9"]);


new Craft('I0CU', 100.0).add(["I07I", "I0A9", "I0A9"]);


new Craft('I0IM', 100.0).add(["I0IL", "I0A9", "I0A9"]);


new Craft('I0CW', 100.0).add(["I08X", "I0A9", "I0A9"]);


new Craft('I0EQ', 100.0).add(["I04T", "I0LH", "I0A9", "I0A9", "I00R", "I0FB", "I0LO"]);


new Craft('I0IO', 100.0).add(["I0IN", "I0LH", "I0A9", "I0A9", "I00R", "I0FB", "I0LO"]);


new Craft('I0EP', 100.0).add(["I0DX", "I0LH", "I0A9", "I0A9", "I00R", "I0FB", "I0LO"]);


new Craft('I0EM', 100.0).add(["I04G", "I0LH", "I0A9", "I0A9", "I00R", "I0FB", "I0LO"]);


new Craft('I0EO', 100.0).add(["I0DW", "I0LH", "I0A9", "I0A9", "I00R", "I0FB", "I0LO"]);


new Craft('I0EN', 100.0).add(["I038", "I0LH", "I0A9", "I0A9", "I00R", "I0FB", "I0LO"]);


new Craft('I03B', 100.0).add(["I0A7", "I0A7", "I04W"]);


new Craft('I06H', 100.0).add(["I068", "I0A7", "I0A8"]);


new Craft('I04Q', 100.0).add(["I03B", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I079', 100.0).add(["I03P", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I088', 100.0).add(["I06H", "I0A9", "I0A8", "I04W"]);


new Craft('I08G', 100.0).add(["I088", "I0A9", "I0A9", "I0A9", "I04W"]);


new Craft('I08H', 100.0).add(["I04Q", "I0A9", "I0A9", "I0A9", "I04W"]);


new Craft('I08U', 100.0).add(["I04E", "I0A9", "I0A9", "I0A9", "I04W"]);


new Craft('I0BE', 100.0).add(["I0BD", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BF', 100.0).add(["I079", "I0A9", "I0A9", "I0A9"]);


new Craft('I0GK', 100.0).add(["I0BQ", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0GL', 100.0).add(["I0BT", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0GI', 100.0).add(["I0BP", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0GJ', 100.0).add(["I0BR", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0IA', 100.0).add(["I0BS", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0ID', 100.0).add(["I0IC", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0CG', 100.0).add(["I0CF", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0G5', 100.0).add(["I0G4", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0C6', 100.0).add(["I0C5", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0CA', 100.0).add(["I0C9", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I096', 100.0).add(["I093", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I09E', 100.0).add(["I09D", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I090', 100.0).add(["I08Z", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0AE', 100.0).add(["I0A4", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0AH', 100.0).add(["I09W", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0AK', 100.0).add(["I09Y", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0AN', 100.0).add(["I09X", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I09A', 100.0).add(["I099", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I09Q', 100.0).add(["I09P", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I09M', 100.0).add(["I09L", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I09I', 100.0).add(["I09H", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0AR', 100.0).add(["I0A5", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0AT', 100.0).add(["I0AS", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0IQ', 100.0).add(["I0IP", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0CH', 100.0).add(["I0CG", "I0CF", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0G6', 100.0).add(["I0G5", "I0G4", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0CB', 100.0).add(["I0CA", "I0C9", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0AI', 100.0).add(["I0AH", "I09W", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I09F', 100.0).add(["I09E", "I09D", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I097', 100.0).add(["I096", "I093", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I091', 100.0).add(["I090", "I08Z", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0C1', 100.0).add(["I0AT", "I0AS", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0AF', 100.0).add(["I0AE", "I0A4", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0AL', 100.0).add(["I0AK", "I09Y", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0AO', 100.0).add(["I0AN", "I09X", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0C7', 100.0).add(["I0C6", "I0C5", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I09B', 100.0).add(["I09A", "I099", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I09R', 100.0).add(["I09Q", "I09P", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I09N', 100.0).add(["I09M", "I09L", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I09J', 100.0).add(["I09I", "I09H", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0C3', 100.0).add(["I0AR", "I0A5", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0IR', 100.0).add(["I0IQ", "I0IP", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0CI', 100.0).add(["I0CH", "I0CF", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0G7', 100.0).add(["I0G6", "I0G4", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0CC', 100.0).add(["I0CB", "I0C9", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0AJ', 100.0).add(["I0AI", "I09W", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I09G', 100.0).add(["I09F", "I09D", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I098', 100.0).add(["I097", "I093", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I092', 100.0).add(["I091", "I08Z", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0AG', 100.0).add(["I0AF", "I0A4", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0AM', 100.0).add(["I0AL", "I09Y", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0AP', 100.0).add(["I0AO", "I09X", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I09C', 100.0).add(["I09B", "I099", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I09S', 100.0).add(["I09R", "I09P", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I09O', 100.0).add(["I09N", "I09L", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I09K', 100.0).add(["I09J", "I09H", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0C2', 100.0).add(["I0C1", "I0AS", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0C4', 100.0).add(["I0C3", "I0A5", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0C8', 100.0).add(["I0C7", "I0C5", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0IS', 100.0).add(["I0IR", "I0IP", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0C9', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0IP', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09D', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I093', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I08Z', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0A4', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0AS', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09W', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09Y', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09X', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I099', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09P', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0C5', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09L', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09H', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0A5', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0O2', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0CF', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0G4', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0BP', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0BR', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0BQ', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0BS', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0BT', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0IC', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0A3', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09Z', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0A2', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0A1', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0A0', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I03C', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0AC', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0DR', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DP', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DO', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DN', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0GQ', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DQ', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0IJ', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0IH', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DM', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DK', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DJ', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DE', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DF', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DD', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0GA', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DC', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DL', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DG', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DH', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DI', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I04G', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I038', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DW', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0DX', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0IN', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I04T', 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT']);


new Craft('I0HK', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HE', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HP', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HD', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HG', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0I2', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HH', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0G3', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HJ', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0GC', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HN', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0GD', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HL', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HF', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HM', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HO', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HI', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HV', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LL"]);


new Craft('I0IE', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LL"]);


new Craft('I0HX', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LL"]);


new Craft('I0HW', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LL"]);


new Craft('I0HU', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LL"]);


new Craft('I0IB', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LL"]);


new Craft('I0I3', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LM"]);


new Craft('I0I4', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LM"]);


new Craft('I0I5', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LM"]);


new Craft('I0I7', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LM"]);


new Craft('I0I6', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LM"]);


new Craft('I0I8', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LM"]);

new Craft('I04B', 100.0).add(["I0KZ"]);


new Craft('I04I', 100.0).add(["I0HT", "I0HT"]);


new Craft('I04I', 100.0).add(["I0HB", "I0HB"]);


new Craft('I04I', 100.0).add(["I0HC", "I0HC"]);


new Craft('I0M4', 100.0).add(["I0HK", "I04B", "I04I"]);


new Craft('I0M8', 100.0).add(["I0HE", "I04B", "I04I"]);


new Craft('I0M9', 100.0).add(["I0HP", "I04B", "I04I"]);


new Craft('I0MA', 100.0).add(["I0HD", "I04B", "I04I"]);


new Craft('I0MB', 100.0).add(["I0I2", "I04B", "I04I"]);


new Craft('I0MC', 100.0).add(["I0HG", "I04B", "I04I"]);


new Craft('I0MD', 100.0).add(["I0HH", "I04B", "I04I"]);


new Craft('I0ME', 100.0).add(["I0G3", "I04B", "I04I"]);


new Craft('I0MF', 100.0).add(["I0HJ", "I04B", "I04I"]);


new Craft('I0MG', 100.0).add(["I0GC", "I04B", "I04I"]);


new Craft('I0MH', 100.0).add(["I0HN", "I04B", "I04I"]);


new Craft('I0MI', 100.0).add(["I0GD", "I04B", "I04I"]);


new Craft('I0MJ', 100.0).add(["I0HL", "I04B", "I04I"]);


new Craft('I0MK', 100.0).add(["I0HF", "I04B", "I04I"]);


new Craft('I0ML', 100.0).add(["I0HM", "I04B", "I04I"]);


new Craft('I0MM', 100.0).add(["I0HO", "I04B", "I04I"]);


new Craft('I04K', 100.0).add(["I0HI", "I04B", "I04I"]);


new Craft('I04A', 100.0).add(["I03F", "I04B", "I04I", "I0LL"]);


new Craft('I0MN', 100.0).add(["I0KO", "I04B", "I04I", "I0LL"]);


new Craft('I0MO', 100.0).add(["I0KP", "I04B", "I04I", "I0LL"]);


new Craft('I0MP', 100.0).add(["I0KQ", "I04B", "I04I", "I0LL"]);


new Craft('I0MQ', 100.0).add(["I0KR", "I04B", "I04I", "I0LL"]);


new Craft('I0MR', 100.0).add(["I0KT", "I04B", "I04I", "I0LL"]);


new Craft('I0MS', 100.0).add(["I0KU", "I04B", "I04I", "I0LL"]);


new Craft('I0MT', 100.0).add(["I0KV", "I04B", "I04I", "I0LL"]);


new Craft('I0MU', 100.0).add(["I0KS", "I04B", "I04I", "I0LL"]);


new Craft('I03G', 100.0).add(["I0KM", "I04B", "I04I", "I0LL"]);


new Craft('I0MX', 100.0).add(["I0L2", "I04B", "I04I", "I0LL"]);


new Craft('I0MY', 100.0).add(["I0L1", "I04B", "I04I", "I0LL"]);


new Craft('I0MZ', 100.0).add(["I0L6", "I04B", "I04I", "I0LL"]);


new Craft('I0N0', 100.0).add(["I0L7", "I04B", "I04I", "I0LL"]);


new Craft('I0N1', 100.0).add(["I0L4", "I04B", "I04I", "I0LL"]);


new Craft('I0N2', 100.0).add(["I0L0", "I04B", "I04I", "I0LL"]);


new Craft('I0N3', 100.0).add(["I0I3", "I04B", "I04I"]);


new Craft('I0N4', 100.0).add(["I0I4", "I04B", "I04I"]);


new Craft('I0N5', 100.0).add(["I0I5", "I04B", "I04I"]);


new Craft('I0N6', 100.0).add(["I0I7", "I04B", "I04I"]);


new Craft('I0N7', 100.0).add(["I0I6", "I04B", "I04I"]);


new Craft('I0N8', 100.0).add(["I0I8", "I04B", "I04I"]);


new Craft('I0N9', 100.0).add(["I0LA", "I04B", "I04I", "I0LL"]);


new Craft('I0NA', 100.0).add(["I0LC", "I04B", "I04I", "I0LL"]);


new Craft('I0NB', 100.0).add(["I0LD", "I04B", "I04I", "I0LL"]);


new Craft('I0NC', 100.0).add(["I0LB", "I04B", "I04I", "I0LL"]);


new Craft('I0ND', 100.0).add(["I0L8", "I04B", "I04I", "I0LL"]);


new Craft('I0NE', 100.0).add(["I0L9", "I04B", "I04I", "I0LL"]);


new Craft('I0NF', 100.0).add(["I0HV", "I04B", "I04I"]);


new Craft('I0NG', 100.0).add(["I0HX", "I04B", "I04I"]);


new Craft('I0NH', 100.0).add(["I0IB", "I04B", "I04I"]);


new Craft('I0NI', 100.0).add(["I0HW", "I04B", "I04I"]);


new Craft('I0NJ', 100.0).add(["I0IE", "I04B", "I04I"]);


new Craft('I0NK', 100.0).add(["I0HU", "I04B", "I04I"]);

new Craft("I0DY", 100.0).add(['I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT', 'I0DT'])

new Craft('I0MV', 100.0).add(["I0KW", "I04B", "I04I", "I0LL"]);

new Craft('I0MW', 100.0).add(["I0KN", "I04B", "I04I", "I0LL"]);

new Craft('I04N', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I04O', 100.0).add(["I04N", "I04B", "I04I"]);


new Craft('I04P', 100.0).add(["I0L3", "I04B", "I04I", "I0LL"]);


new Craft('I0NP', 100.0).add(["I0NO", "I0LH", "I00R", "I0A9", "I0A9", "I0FB", "I0LO"]);


new Craft('I0NT', 100.0).add(["I0NS", "I0LH", "I0A9", "I0A9", "I00R", "I0FB", "I0LO"]);


new Craft('I0NX', 100.0).add(["I0NW", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0O3', 100.0).add(["I0O2", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0NY', 100.0).add(["I0NX", "I0NW", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0O4', 100.0).add(["I0O3", "I0O2", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0NZ', 100.0).add(["I0NY", "I0NW", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0O5', 100.0).add(["I0O4", "I0O2", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0NW', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0NO', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0NS', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0O0', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0O7', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0O1', 100.0).add(["I0O0", "I04B", "I04I"]);


new Craft('I0O6', 100.0).add(["I0O7", "I04B", "I04I"]);


new Craft('I0NR', 100.0).add(["I0NQ", "I04B", "I04I", "I0LL"]);


new Craft('I0H8', 100.0).add(["I0L5", "I04B", "I04I", "I0LL"]);


new Craft('I0NV', 100.0).add(["I0NU", "I04B", "I04I", "I0LL"]);


new Craft('I0OU', 100.0).add(["I05U", "I0A7"]);


new Craft('I0PG', 100.0).add(["I0PF", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0PN', 100.0).add(["I0PM", "I0LG", "I0FB", "I0AQ", "I0LO"]);


new Craft('I0PH', 100.0).add(["I0PG", "I0PF", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0PO', 100.0).add(["I0PN", "I0PM", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0PI', 100.0).add(["I0PH", "I0PF", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0PP', 100.0).add(["I0PO", "I0PM", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0LO", "I0LO"]);


new Craft('I0PF', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0PM', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0PQ', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0PJ', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0PR', 100.0).add(["I0PQ", "I04B", "I04I"]);


new Craft('I0PK', 100.0).add(["I0PJ", "I04B", "I04I"]);

new Craft('I0QZ', 100.0).add(["I0OW", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R0', 100.0).add(["I0P8", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R1', 100.0).add(["I0PL", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R2', 100.0).add(["I0PA", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R3', 100.0).add(["I0OX", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R4', 100.0).add(["I0OY", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R5', 100.0).add(["I0OZ", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R6', 100.0).add(["I0P0", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R7', 100.0).add(["I0P1", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R8', 100.0).add(["I0P2", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R9', 100.0).add(["I0PT", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RA', 100.0).add(["I0P3", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RB', 100.0).add(["I0OV", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RC', 100.0).add(["I0P4", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RD', 100.0).add(["I0P5", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RE', 100.0).add(["I0P6", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RF', 100.0).add(["I0P7", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RG', 100.0).add(["I0PS", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RI', 100.0).add(["I0P9", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RH', 100.0).add(["I0PB", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RJ', 100.0).add(["I0PC", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RK', 100.0).add(["I0PD", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RS', 100.0).add(["I0OD", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RT', 100.0).add(["I0OG", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RU', 100.0).add(["I0OC", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RV', 100.0).add(["I0OE", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RW', 100.0).add(["I0OB", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RX', 100.0).add(["I0OI", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RY', 100.0).add(["I0OH", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RZ', 100.0).add(["I0OF", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RL', 100.0).add(["I0OP", "I0OT", "I0OT"]);


new Craft('I0RM', 100.0).add(["I0OL", "I0OT", "I0OT"]);


new Craft('I0RN', 100.0).add(["I0OO", "I0OT", "I0OT"]);


new Craft('I0RO', 100.0).add(["I0OM", "I0OT", "I0OT"]);


new Craft('I0RP', 100.0).add(["I0ON", "I0OT", "I0OT"]);


new Craft('I0RQ', 100.0).add(["I0OJ", "I0OT", "I0OT"]);


new Craft('I0RR', 100.0).add(["I0OK", "I0OT", "I0OT"]);


new Craft('I0S1', 100.0).add(["I0QB", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S2', 100.0).add(["I0Q2", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S3', 100.0).add(["I0QC", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S4', 100.0).add(["I0Q9", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S5', 100.0).add(["I0Q3", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S6', 100.0).add(["I0Q4", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S7', 100.0).add(["I0Q5", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S8', 100.0).add(["I0QA", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S9', 100.0).add(["I0Q6", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SA', 100.0).add(["I0Q7", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SB', 100.0).add(["I0Q8", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SC', 100.0).add(["I0Q1", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SD', 100.0).add(["I0QD", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SE', 100.0).add(["I0QH", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SF', 100.0).add(["I0QL", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SG', 100.0).add(["I0QI", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SH', 100.0).add(["I0QJ", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SI', 100.0).add(["I0QK", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SJ', 100.0).add(["I0QQ", "I0QN", "I0QN"]);


new Craft('I0SK', 100.0).add(["I0QP", "I0QN", "I0QN"]);


new Craft('I0SL', 100.0).add(["I0QO", "I0QN", "I0QN"]);


new Craft('I0SM', 100.0).add(["I0QR", "I0QN", "I0QN"]);


new Craft('I0SN', 100.0).add(["I0QS", "I0QN", "I0QN"]);
},{}],2:[function(require,module,exports){
module.exports.chests = [] 

class ItemDrop {
  constructor(id, chance, l__r) {
    this.id = id;
    this.chance = Number((chance || 100).toFixed(2));
    if (l__r) this.l__r = l__r;
  }
}

class Chest {
  constructor(id) {
    this.id = id;
    this.drops = [];
    module.exports.chests.push(this);
  }
  
  add(id, chance, l__r) {
    this.drops.push(new ItemDrop(id, chance, l__r));
    return this;
  }
  
  addMany(id, qty, chance) {
    for (let i = 0; i < qty; i++) {
      this.drops.push(new ItemDrop(id, chance));
    }
    return this;
  }
  
  addItems(itemArray, chance) {
    itemArray.forEach(item => this.drops.push(new ItemDrop(item, (chance || 100) / itemArray.length)));
    return this;
  }
}

class Unit extends Chest {
  constructor(id) {
    super(id);
    this.unit = true;
  }
}

new Chest("I0JR")
  .add("I0FY")
  .add("I0FU")
  .add("I0JV")
  .add("I0JW", 1)
  .add("I0EX", 10)
  .add("I0JY", 1);


new Chest("I0JS")
  .add("I0FZ")
  .add("I0FV")
  .addMany("I0JV", 2)
  .add("I0JW", 1.2)
  .add("I0EX", 10)
  .add("I0JY", 1);

new Chest("I0JT")
  .add("I0G0")
  .add("I0FW")
  .addMany("I0JV", 3)
  .add("I0JW", 1.5)
  .add("I0EX", 10)
  .add("I0JY", 1);

new Chest("I0JU")
  .add("I0G1")
  .add("I0FX", 30)
  .addMany("I0JV", 4)
  .add("I0JW", 2)
  .add("I0EX", 10)
  .add("I0JY", 1);


new Chest("I0EV")
  .add("I0EX", 1)
  .add("I0FY")
  .add("I0FU")
  .add("I0FK", 3);

new Chest("I0EW")
  .add("I0EX", 1.2)
  .add("I0FZ")
  .add("I0FV")
  .add("I0JO", 5);


new Chest("I0FI")
  .add("I0EX", 1.5)
  .add("I0G0")
  .add("I0FW")
  .add("I0JP", 4);

new Chest("I0FJ")
  .add("I0EX", 10)
  .add("I0G1")
  .add("I0JQ", 40);

new Chest("I0FU")
  .add("I05W")
  .add("I05X")
  .add("I071")
  .add("I072");

new Chest("I0FV")
  .add("I06Y")
  .add("I06L");

new Chest("I0FW")
  .add("I076")
  .add("I07L")
  .add("I086");

new Chest("I0FX")
  .add("I037")
  .add("I0AB");

let udg_Acangel_Item = ["I09D", "I093", "I08Z", "I0A4", "I09W", "I09Y", "I09X", "I099", "I09P", "I09L", "I09H", "I0A5", "I0AS", "I0C5", "I0C9", "I0CF", "I0G4", "I0IP", "I0NW" ,"I0O2", "I0PF", "I0PM"]
let udg_Acangel_Item2 = ["I0A3", "I09Z", "I0A2", "I0A1", "I0A0", "I03C", "I0BP", "I0BR", "I0BQ", "I0BS", "I0BT", "I0IC"]
let udg_Acangel_Item_S = ["I080", "I04C", "I07F"];
let udg_Acangel_Item_ALL = ["I07O", "I0BD", "I077", "I081", "I07G", "I045", "I04D", "I04E", "I082", "I087", "I07M"];

new Chest("I0AB")
  .add("I0FB", 6)
  .add("I0LO", 6)
  .add("I0AQ", 15)
  .add("I0A6", 8.5)
  .add("I0BU", 8)
  .add("I0EX", 3)
  .addItems(udg_Acangel_Item_S, 10)
  .addItems(udg_Acangel_Item_ALL, 90);


new Chest("I0KL")
  .add("I0FB", 2)
  .add("I0LO", 2)
  .add("I0AQ", 5)
  .add("I0A6", 3.5)
  .add("I0BU", 3)
  .add("I0EX", 2);


new Chest("I0A6")
  .add("I04Z")
  .addItems(udg_Acangel_Item);

new Chest("I0BU")
  .add("I04Z")
  .addItems(udg_Acangel_Item2)

let udg_AcDevill_Item = ["I0DM", "I0DK", "I0DJ", "I0DE", "I0DF", "I0DD", "I0DC", "I0DL", "I0DG", "I0DH", "I0DI", "I0GA", "I0NO"]
let udg_AcDevill_Item02 = ["I0DR", "I0DP", "I0DO", "I0DN", "I0DQ", "I04G", "I038", "I0DW", "I0DX", "I04T", "I0GQ", "I0IH", "I0IJ", "I0IN", "I0NS"]
let udg_AcDevill_Epic = ["I0D9", "I0DB"];
let udg_AcDevill_Nomal = ["I0CZ", "I0D3",  "I0CY", "I0D0", "I0D1", "I0D2", "I0D8", "I0D7", "I0D6"];

new Chest("I037")
  .add("I00R", 4)
  .add("I035", 8)
  .add("I0DS", 8)
  .add("I0EX", 3)
  .addItems(udg_AcDevill_Epic, 10)
  .addItems(udg_AcDevill_Nomal, 90);

new Chest("I0KJ")
  .add("I00R", 1.5)
  .add("I035", 3)
  .add("I0DS", 3)
  .add("I0EX", 2);


new Chest("I0DS")
  .add("I0DT")
  .addItems(udg_AcDevill_Item);

new Chest("I035")
  .add("I0DT")
  .addItems(udg_AcDevill_Item02);

let udg_GOD_Item_Int = ["I0IT", "I0IU", "I0IV", "I0IW", "I0J4", "I0JL", "I0J5", "I0J8", "I0J1", "I0JD", "I0J9", "I0JI", "I0JH", "I0J7", "I0J3", "I0J6", "I0JE", "I0J2", "I0JC", "I0JK", "I0JA", "I0JJ", "I0JM", "I0JF", "I0JB", "I0JG", "I0JN", "I0IZ", "I0KB", "I0D5", "I0PY", "I0LJ"]
let udg_GOD02_Item_Int = ["I0KM", "I0KN", "I0KO", "I0KP", "I0KQ", "I0KR", "I0KS", "I0KT", "I0KU", "I0KV", "I0KW", "I03F", "I0NQ"];
let udg_GOD02_Item_Int2 = ["I0L1", "I0L2", "I0L3", "I0L4", "I0L5", "I0L6", "I0L7", "I0L8", "I0L9", "I0LA", "I0LB", "I0LC", "I0LD", "I0L0", "I0NU"]
let udg_Event_Item_Int = ["I034", "I06I", "I06Z", "I065", "I05Y", "I06A", "I07K", "I033", "I0CR", "I04H", "I07X"];
let udg_Masin_Item = ["I0OL", "I0OP", "I0OO", "I0OM", "I0ON", "I0OJ", "I0OK", "I0OD", "I0OG", "I0OC", "I0OE", "I0OB", "I0OI", "I0OH", "I0OF"]
let udg_Masin_Item02 = ["I0OW", "I0P8", "I0PA", "I0OX", "I0OY", "I0OZ", "I0P0", "I0P1", "I0P2", "I0OV", "I0P3", "I0P4", "I0P5", "I0P6", "I0P7", "I0P9", "I0PB", "I0PC", "I0PD", "I0PL", "I0PS", "I0PT"];
let udg_AcAngel_GOD_Item1 = ['I0QB','I0Q2','I0QC','I0Q9','I0Q3','I0Q4','I0Q5','I0QA','I0Q6','I0Q7','I0Q8','I0Q1','I0QD']
let udg_AcAngel_GOD_Item2 = ['I0QH','I0QL','I0QI','I0QJ','I0QK','I0QQ','I0QP','I0QO','I0QS','I0QR'];
let udg_Dimension_Item = ["I0ST", "I0SO", "I0SU", "I0SP", "I0SS", "I0SV", "I0SQ", "I0SR", "I0TE", "I0TG"];
let udg_Dimension_Item02 = ["I0T0", "I0T2", "I0SW", "I0SX", "I0SY", "I0SZ", "I0T1", "I0TD", "I0TF", "I0TH", "I0TC"];

new Chest("I0IX").addItems(udg_GOD_Item_Int);

new Chest("I0KX").addItems(udg_GOD02_Item_Int);

new Chest("I0LE").addItems(udg_GOD02_Item_Int2);

new Chest("I0OQ").add("I0OS").addItems(udg_Masin_Item);

new Chest("I0PE").add("I0OS").addItems(udg_Masin_Item02);

new Chest("I0QF").add("I0QG").addItems(udg_AcAngel_GOD_Item1);

new Chest("I0QM").add("I0QG").addItems(udg_AcAngel_GOD_Item2);

new Chest("I0TB").add("I0T8").addItems(udg_Dimension_Item);

new Chest("I0TI").add("I0T8").addItems(udg_Dimension_Item02);

new Chest("I05W")
  .add('I03A' , 14)
  .add('I03D' , 14)
  .add('I0A7' , 14.5)
  .add('I041' , 14.5)
  .add('I03I' , 14)
  .add('I04Y' , 14)
  .add("I0EX", 1);


new Chest("I05X")
  .add('I03Z' , 14)
  .add('I03J' , 14)
  .add('I0A7' , 12.5)
  .add('I046' , 14)
  .add('I03P' , 14)
  .add("I0EX", 1);



new Chest("I06L")
  .add('I06F' , 12)
  .add('I06G' , 12.5)
  .add('I0A8' , 12.5)
  .add('I0BD' , 3)
  .add('I0B6' , 12.5)
  .add('I0IL' , 3)
  .add('I06J' , 24)
  .add("I0EX", 1.5);


new Chest("I06Y")
  .add('I04E' , 3)
  .add('I06X' , 12.5)
  .add('I0A8' , 12.5)
  .add('I06V' , 12.5)
  .add('I06T' , 12.5)
  .add('I051' , 12.5)
  .add('I070' , 24)
  .add("I0EX", 1.5);


new Chest("I071")
  .add('I067' , 14)
  .add('I069' , 14)
  .add('I0A7' , 14.5)
  .add('I066' , 6)
  .add('I068' , 14)
  .add("I0EX", 1);


new Chest("I072")
  .add('I03M' , 12.5)
  .add('I061' , 12.5)
  .add('I064' , 12.5)
  .add('I063' , 12.5)
  .add('I0A7' , 12.5)
  .add('I062' , 12.5)
  .add("I0EX", 1);

new Chest("I076")
  .add('I0F3' , 0.4)
  .add('I0FG' , 3)
  .add('I04C' , 3)
  .add('I0A9' , 16)
  .add('I04D' , 6)
  .add('I07C' , 6)
  .add('I077' , 30)
  .add('I0D8' , 6)
  .add('I0D6' , 6)
  .add('I0D9' , 3.5)
  .add('I0F2' , 3)
  .add('I0FE' , 0.4)
  .add("I0EX", 2);



new Chest("I07L")
  .add('I0FF' , 0.4)
  .add('I0EZ' , 0.4)
  .add('I07F' , 3.5)
  .add('I0A9' , 16)
  .add('I045' , 6)
  .add('I07G' , 6)
  .add('I07O' , 6)
  .add('I07M' , 30)
  .add('I0CY' , 6)
  .add('I0D1' , 6)
  .add('I0CZ' , 6)
  .add('I0D3' , 6)
  .add('I0D0' , 6)
  .add('I0D2' , 6)
  .add("I0EX", 2);



new Chest("I086")
  .add('I080' , 3)
  .add('I0A9' , 16)
  .add('I082' , 6)
  .add('I081' , 16)
  .add('I087' , 30)
  .add('I0F9' , 0.4)
  .add('I0FD' , 3)
  .add('I0FL' , 3)
  .add('I0D7' , 6)
  .add('I0DB' , 3)
  .add('I0F1' , 3)
  .add('I0FA' , 0.4)
  .add('I0FM' , 0.4)
  .add("I0EX", 2);

  
new Chest("I0HA")
  .add('I0HT' , 5)
  .add('I0HB' , 5)
  .add('I0HC' , 5)
  .add('I0IX' , 15)
  .add("I0EX", 3);



new Chest("I0LV").add("I0EX", 0.3).add("I0FY");

new Chest("I0LW").add("I0EX", 0.45).add("I0FZ");

new Chest("I0LX").add("I0EX", 0.6).add("I0G0");

new Chest("I0LY").add("I0EX", 1).add("I0G1");

new Chest("I0LU")
  .add('I080' , ( 1.50 * 0.40 ))
  .add('I0A9' , ( 8.00 * 0.40 ))
  .add('I082' , ( 3.00 * 0.40 ))
  .add('I081' , ( 3.00 * 0.40 ))
  .add('I087' , ( 15.00 * 0.40 ))
  .add('I0F9' , ( 0.20 * 0.40 ))
  .add('I0FD' , ( 0.20 * 0.40 ))
  .add('I0FL' , ( 0.20 * 0.40 ))
  .add('I0D7' , ( 3.00 * 0.40 ))
  .add('I0DB' , ( 1.50 * 0.40 ))
  .add('I0F1' , ( 0.20 * 0.40 ))
  .add('I0FA' , ( 0.20 * 0.40 ))
  .add('I0FM' , ( 0.20 * 0.47 ))
  .add('I0FF' , ( 0.20 * 0.40 ))
  .add('I0EZ' , ( 0.20 * 0.40 ))
  .add('I07F' , ( 1.50 * 0.40 ))
  .add('I0A9' , ( 8.00 * 0.40 ))
  .add('I045' , ( 3.00 * 0.40 ))
  .add('I07G' , ( 3.00 * 0.40 ))
  .add('I07O' , ( 3.00 * 0.40 ))
  .add('I07M' , ( 15.00 * 0.40 ))
  .add('I0CY' , ( 3.00 * 0.40 ))
  .add('I0D1' , ( 3.00 * 0.40 ))
  .add('I0CZ' , ( 3.00 * 0.40 ))
  .add('I0D3' , ( 3.00 * 0.40 ))
  .add('I0D0' , ( 3.00 * 0.40 ))
  .add('I0D2' , ( 3.00 * 0.40 ))
  .add('I0F3' , ( 0.20 * 0.40 ))
  .add('I0FG' , ( 0.20 * 0.40 ))
  .add('I04C' , ( 1.50 * 0.40 ))
  .add('I0A9' , ( 8.00 * 0.40 ))
  .add('I04D' , ( 3.00 * 0.40 ))
  .add('I07C' , ( 3.00 * 0.40 ))
  .add('I077' , ( 15.00 * 0.40 ))
  .add('I0D8' , ( 3.00 * 0.40 ))
  .add('I0D6' , ( 3.00 * 0.40 ))
  .add('I0D9' , ( 1.50 * 0.40 ))
  .add('I0F2' , ( 0.20 * 0.40 ))
  .add('I0FE' , ( 0.20 * 0.40 ))
  .add("I0EX", 2);


new Chest("I0M7")
  .add("I00R", 3)
  .add("I035", 6.5)
  .add("I0DS", 6.5)
  .add("I0FB", 4)
  .add("I0LO", 4)
  .add("I0AQ", 11)
  .add("I0A6", 6)
  .add("I0BU", 6)
  .add("I0EX", 3);


new Chest("I0KY")
  .add("I04B", 3)
  .add("I0KX", 6)
  .add("I0LE", 6)
  .add("I0EX", 3);


new Chest("I0OR")
  .add("I0OQ", 5)
  .add("I0PE", 5)
  .add("I0OT", 2)
  .add("I0EX", 5);

new Chest("I0QE")
  .add("I0QF", 5)
  .add("I0QM", 5)
  .add("I0QN", 1)
  .add("I0EX", 5);


new Chest("I0TA")
  .add("I0TI", 5)
  .add("I0TB", 5)
  .add("I0T9", 1.3)
  .add("I0EX", 5);


new Unit("n00G")
  .add("I021", 100)
  .add("I022", 100);

new Unit("n002")
  .add("I027", 30)
  .add("I00D", 100)
  .add("I023", 100);

new Unit("n00H")
  .add("I02C", 30)
  .add("I028", 100)
  .add("I029", 100);

new Unit("n010")
  .add("I02D", 30)
  .add("I02E", 30)
  .add("I02F", 30)
  .add("I02M", 100)
  .add("I02L", 100)
  .add("I02K", 100)
  .add("I02J", 100);

new Unit("n00B")
  .add("I02H", 8)
  .add("I02I", 8)
  .add("I02G", 8);

new Unit("n00D")
  .add("I02H", 8)
  .add("I02I", 8)
  .add("I02G", 8);

new Unit("n00C")
  .add("I02P", 100)
  .add("I02R", 100)
  .add("I02Q", 100);

new Unit("n00J")
  .add("I02T", 100)
  .add("I02N", 100);

new Unit("n00L")
  .add("I000", 30)
  .add("I001", 30)
  .add("I002", 30)
  .add("I02N", 100)
  .add("I02T", 100);

new Unit("n00M")
  .add("I006", 8)
  .add("I007", 8)
  .add("I008", 8);

new Unit("n009")
  .add("I003", 100)
  .add("I005", 100)
  .add("I004", 100);

new Unit("n00N")
  .add("I026", 8)
  .add("I00E", 8)
  .add("I00M", 8);

new Unit("n00P")
  .add("I00G", 8)
  .add("I00H", 8)
  .add("I00I", 8);

new Unit("n00Q")
  .add("I00C", 8)
  .add("I00N", 8)
  .add("I00O", 8);

new Unit("n00Y")
  .add("I00J", 100)
  .add("I00K", 100)
  .add("I00L", 100)
  .add("I011", 100)
  .add("I00Y", 100);

new Unit("n00Z")
  .add("I00Z", 30)
  .add("I010", 30)
  .add("I00X", 100)
  .add("I00Q", 100)
  .add("I00P", 100);

new Unit("n00V")
  .add("I013", 8)
  .add("I014", 8)
  .add("I015", 8);

new Unit("n00W")
  .add("I01F", 8)
  .add("I01H", 8)
  .add("I01G", 8);

new Unit("n006")
  .add("I01J", 100)
  .add("I01I", 100)
  .add("I01K", 100);

new Unit("n013")
  .add("I01C", 30)
  .add("I01D", 30)
  .add("I01E", 30)
  .add("I019", 100)
  .add("I01A", 100)
  .add("I01B", 100)
  .add("I01L", 100)
  .add("I01M", 100);

new Unit("n00R")
  .add("I01N", 8)
  .add("I01O", 8)
  .add("I01P", 8);

new Unit("n00S")
  .add("I01V", 8);

new Unit("n00T")
  .add("I01T", 8)
  .add("I01U", 8);

new Unit("n015")
  .add("I01Q", 100)
  .add("I01R", 100)
  .add("I01S", 100)
  .add("I02V", 100)
  .add("I02U", 100)
  .add("I01S", 100);

new Unit("n016")
  .add("I01Z", 30)
  .add("I020", 30)
  .add("I02S", 30)
  .add("I030", 30)
  .add("I01W", 100)
  .add("I01X", 100)
  .add("I01Y", 100);

new Unit("n03R")
  .add("I0FO", 100);

new Unit("n03S")
  .add("I0FO", 100)
  .add("I0FO", 100)
  .add("I0FO", 100)
  .add("I0FO", 100)
  .add("I0FO", 100)
  .add("I0FO", 100);

new Unit("n03T")
  .add("I05X", 100)
  .add("I05W", 100)
  .add("I071", 100)
  .add("I072", 100);

new Unit("n04M")
  .add("I0KA", 100);

new Unit("n04N")
  .add("I0KA", 100)
  .add("I0KA", 100)
  .add("I0KA", 100)
  .add("I0KA", 100)
  .add("I0KA", 100)
  .add("I0KA", 100);

new Unit("n04O")
  .add("I06L", 100)
  .add("I06Y", 100);

//정수



// 스몰




new Unit("n04C").add("I0JS");

new Unit("n04D").add("I0JT");

new Unit("n04E").add("I0JU");

new Unit("n00X").add("I00F", 30);

new Unit("n019")
  .add("I02X", 25)
  .add("I02W", 25)
  .add("I02Y", 25)
  .add("I02Z", 25)
  .add("I031", 25);

new Unit("n01X")
  .add("I05R", 30)
  .add("I05S", 30)
  .add("I03N", 30)
  .add("I05T", 30)
  .add("I02Y", 30);

new Unit("n02B")
  .add("I03E", 35)
  .add("I03Y", 35)  
  .add("I05U", 35);

new Unit("n02C")
  .add("I03K", 35)
  .add("I043", 35)  
  .add("I04W", 35);

new Unit("n02D")
  .add("I04M", 35)
  .add("I05V", 35)  
  .add("I040", 35);

new Unit("n022").add("I05W");

new Unit("n023").add("I05X");

new Unit("n024").add("I06L");

new Unit("n02A").add("I06Y");

new Unit("e02J").add("I072");

new Unit("n00E").add("I071");

new Unit("n003").add("I076").add("I0LR");

new Unit("n01Y").add("I07L").add("I0LQ");

new Unit("e05T").add("I086").add("I0LS");

new Unit("n027").add("I0AB").add("I0AD").add("I0M5");

new Unit("n02Y").add("I037").add("I036").add("I0M6");

new Unit("n03Z").add("I0HA").add("I0IY").add("I0PU");

new Unit("n04Q").add("I0KY").add("I0IY").add("I0PV");

new Unit("n04I").add("I0LR");

new Unit("e0DF").add("I0LS");

new Unit("n04K").add("I0LQ");

new Unit("n051").add("I0M6");

new Unit("n059").add("I0M5");

new Unit("e0D8").add("I0M7");

new Unit("n04B").add("I0JR");

new Unit("n05B").add("I0BV");

new Unit("n05C").addMany("I0BV", 6);

new Unit("n05P").add("I0OR").add("I0IY");

new Unit("n025").add("I0KL");

new Unit("n026").add("I0KL");

new Unit("n02X").add("I0KJ");

new Unit("n030").add("I0KJ");

new Unit("n05Z").add("I0Q0");

new Unit("n05Y").add("I0QE").add("I0IY");

new Unit("n062").add("I0TA");
},{}],3:[function(require,module,exports){
module.exports = {
  I07P: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 30000,
      agi: 1800,
      damage_increase: 15
    },
    label: "Sword of the Swordman",
    k_label: "검객의 검"
  },
  I03Q: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 35000,
      agi: 1800,
      str: 1800
    },
    label: "Sword of Chaos",
    k_label: "혼돈의 검"
  },
  I060: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 30000,
      int: 2000,
      str: 1800
    },
    label: "Combat Staff",
    k_label: "전투 지팡이"
  },
  I078: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 30000,
      int: 2200
    },
    label: "Treant Staff",
    k_label: "트렌트 지팡이",
    effects: ["On use: summon 2 Treant (120s cd)"],
    k_effects: ["사용시 트렌트 2기 소환 (쿨타임 120초)"]
  },
  I07S: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 60000,
      agi: 2700,
      damage_increase: 20
    },
    label: "Holy Sword Valdrix",
    k_label: "성검 발드릭스"
  },
  I0BW: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 60000,
      int: 2700,
      damage_increase: 20
    },
    label: "Greater Magic Staff",
    k_label: "대마력 지팡이"
  },
  I07U: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 60000,
      str: 2500,
      hp: 10000
    },
    label: "Sword of life",
    k_label: "생명의 검",
    effects: [
      "Every 10th attack will recover STR x3 HP(10s cd)",
      "Every 6th spell will recover STR x3 HP(10s cd)",
      "On use, recovers STR x4 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복(STR x3)(쿨타임10초)",
      "스킬사용 6회시 생명력회복(STR x3)(쿨타임10초)",
      "사용시 능력치 비례의 생명력 회복(STR x4)(120초)"
    ]
  },
  I07V: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 60000,
      agi: 2500,
      hp: 10000
    },
    label: "Bow of life",
    k_label: "생명의 활",
    effects: [
      "Every 10th attack will recover AGI x3 HP (9s cd)",
      "Every 6th spell will recover AGI x3 HP (10s cd)",
      "On use, recovers AGI x4 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복(AGI x3)(쿨타임9초)",
      "스킬사용 6회시 생명력회복(AGI x3)(쿨타임10초)",
      "사용시 능력치 비례의 생명력 회복(AGI x4)(120초)"
    ]
  },
  I07W: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 60000,
      int: 2500,
      hp: 10000
    },
    label: "Staff of life",
    k_label: "생명의 지팡이",
    effects: [
      "Every 4th spell will recover INT x3 HP",
      "On use: Recovers INT x4 HP to all allies within range (80s cd)"
    ],
    k_effects: [
      "스킬사용 4회시 생명력회복(INT x3)(쿨타임 10초)",
      "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복(INT x4)(쿨타임 80초)"
    ]
  },
  I06D: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 60000,
      agi: 2600,
      attack_real: 10,
      attack_agi: true
    },
    label: "Dagger of Divine Light",
    k_label: "신성한 빛의 단검"
  },
  I06C: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 60000,
      str: 2600,
      attack_speed: 20,
      attack_real: 13,
      attack_str: true
    },
    label: "Sword of Divine Light",
    k_label: "신성한 빛의 대검"
  },
  I06E: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 60000,
      int: 2600,
      int_tick: true,
      attack_int_real: 42
    },
    label: "Staff of Divine Light",
    k_label: "신성한 빛의 지팡이"
  },
  I06M: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 60000,
      str: 2300,
      agi: 2300,
      attack_str_agi: true,
      attack_real: 5
    },
    label: "Sword of Chaotic Light",
    k_label: "혼돈의 빛의 검"
  },
  I06N: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 60000,
      str: 2500,
      int: 2500,
      attack_str_int_real: 20,
      int_tick: true
    },
    label: "Sword of Resplendent Light",
    k_label: "신성한 빛의 전투지팡이"
  },
  I07A: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 60000,
      int: 2700
    },
    label: "Judge's Staff",
    k_label: "심판자의 지팡이",
    effects: ["On use: summons 2 judges (120s cd)"],
    k_effects: ["사용시 심판자 2기 소환(쿨타임 120초)"]
  },
  I06K: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      str: 2800,
      agi: 2800,
      int: 2800
    },
    label: "Divine Sword Excalibur",
    k_label: "성검 EX칼리버",
    effects: [
      "On Use: Fires a laser in chosen direction (Deals 150000 + (STR + AGI + INT) x70-100)(120s cd)"
    ],
    k_effects: [
      "사용시 엑스칼리버 시전 (150000 + (STR + AGI + INT) x70-100)(쿨타임120초)"
    ]
  },
  I06P: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 75000,
      str: 3000
    },
    label: "Axe of Fire",
    k_label: "마계의 불꽃 도끼",
    effects: [
      "On Use: Causes a massive explosion, dealing 300000 + STR x120 damage (120s cd)"
    ],
    k_effects: ["사용시 마계의 폭발 발생 (300000 + STR x120)(쿨타임 120초)"]
  },
  I06Q: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 75000,
      int: 2700
    },
    label: "Mysterious Fireworks Staff",
    k_label: "마계의 불꽃 지팡이",
    effects: ["On use, increase INT by 2000 (duration 12s, 120s cd)"],
    k_effects: ["사용시 지능+2000 (지속 12초)(쿨타임 120초)"]
  },
  I06O: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 75000,
      agi: 2700,
      attack_speed: 200
    },
    label: "Dagger of Flame",
    k_label: "마계의 불꽃단검"
  },
  I074: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      agi: 3300,
      attack_speed: 100,
      attack_agi: true,
      attack_real: 20
    },
    label: "Meteorite Dagger",
    k_label: "운석 단검"
  },
  I0CD: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      str: 3500,
      attack_speed: 80,
      attack_str: true,
      attack_real: 20
    },
    label: "Black Earth Mace",
    k_label: "운석 철퇴"
  },
  I075: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      int: 3300,
      int_tick: true,
      attack_int_real: 52
    },
    label: "Staff of Judgement",
    k_label: "심판의 지팡이",
    effects: ["Intelligence increased by 1000 (duration 10s, 120s cd)"],
    k_effects: ["사용시 지능 1000증가(지속시간 10초)(쿨타임 120초)"]
  },
  I073: {
    type: "武器",
    color: "orange",
    page: 3,
    rate: 100,
    stats: {
      atk: 100000,
      str: 4000
    },
    label: "Black Earth Sword",
    k_label: "검은 대지의 대검",
    effects: [
      "On use: Cause a large explosion of Black Earth, dealing 300000 + STR x120 damage (60s cd)"
    ],
    k_effect: ["사용시 검은대지의 폭발 생성 (300000 + STR x120)(쿨타임 60초)"]
  },
  I07T: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      agi: 3500,
      damage_increase: 30
    },
    label: "Holy Sword Fragarach",
    k_label: "성검 프라가라흐"
  },
  I0BX: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      int: 3500,
      damage_increase: 30
    },
    label: "Dragonic Jewel Staff",
    k_label: "드래곤 마력 지팡이"
  },
  I0BZ: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      agi: 3500,
      damage_increase: 40,
      damage_taken: 15
    },
    label: "Claws of Death",
    k_label: "죽음의 손톱"
  },
  I07B: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      int: 3500
    },
    label: "Meteor Staff",
    k_label: "운석 지팡이",
    effects: [
      "On use, summons powerful infernal, dealing INT x80 to nearby units (lasts 20s)",
      "Intelligence increased by 1000 (duration 10s, cd 120s)"
    ],
    k_effects: [
      "사용시 강력한 인페르노 1기를 데미지를주며 소환, 주변 유닛에 INT x80 처리 (지속시간 20초)",
      "지능 1000증가(지속시간 10초)(쿨타임 120초)"
    ]
  },
  I07D: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      str: 2600,
      agi: 2600,
      attack_str_agi: true,
      attack_real: 9
    },
    label: "Chaotic Meteorite Sword",
    k_label: "혼돈의 운석 검",
    effects: [
      "On Use: An outward explosion of Black Eart, dealing 300000 + (STR + AGI) x55 damage (120s cd)"
    ],
    k_effects: [
      "사용시 검은대지의 폭발 생성 (300000 + (STR + AGI) x55)(쿨타임 120초)"
    ]
  },
  I07E: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      int: 2800,
      str: 2600,
      int_tick: true,
      attack_str_int_real: 22
    },
    label: "Judge's Staff of Chaos",
    k_label: "혼돈의 심판 지팡이"
  },
  I085: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      int: 3500,
      hp: 20000
    },
    label: "Staff of Infinite Life",
    k_label: "무한한 생명의 지팡이",
    effects: [
      "Every 4 spell casts will recover INT x4 HP (10s cd)",
      "On use, restore INT x5 health to nearby allies (80s cd)"
    ],
    k_effects: [
      "스킬사용 4회시 생명력 회복 (INT x4)(쿨타임 10초)",
      "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x5)(쿨타임 80초)"
    ]
  },
  I083: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      agi: 3500,
      hp: 20000
    },
    label: "Bow of Infinite Life",
    k_label: "무한한 생명의 활",
    effects: [
      "Every 10 attacks will recover AGI x3.5 HP (9s cd)",
      "Every 6 spells will recover AGI x3.5 HP (10s cd)",
      "On Use: Recover AGI x5 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력 회복 (AGI x3.5)(쿨타임 10초)",
      "스킬 시전 6회당 생명력 회복 (AGI x3.5)(쿨타임 9초)",
      "사용시 생명력 회복 (AGI x5)(쿨타임 120초)"
    ]
  },
  I084: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      str: 3500,
      hp: 20000
    },
    label: "Sword of Infinite Life",
    k_label: "무한한 생명의검",
    effects: [
      "Every 10 attacks will recover STR x3.5 HP (9s cd)",
      "Every 6 spells will recover STR x3.5 HP (10s cd)",
      "On Use: Recover STR x5 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (STR x3.5)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (STR x3.5)(쿨타임 10초)",
      "사용시  생명력회복 (능력치비례)(쿨타임 120초)"
    ]
  },
  I07Y: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 3800,
      int: 3800,
      agi: 3800
    },
    label: "Excalibur Morgan",
    k_label: "EX칼리버 모르간",
    effects: [
      "On Use: Fires a laser in chosen direction (Deals 150000 + (STR + AGI + INT) x120-160)(120s cd)"
    ],
    k_effects: [
      "사용시 엑스칼리버 모르간 시전 (150000 + (STR + AGI + INT) x120-160)(쿨타임120초)"
    ]
  },
  I07Z: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      agi: 5000,
      damage_increase: 40
    },
    label: "Kanshou and Bakuya",
    k_label: "간장 막야"
  },
  I0BY: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      int: 5000,
      damage_increase: 40
    },
    label: "Akashic Records",
    k_label: "아카식 레코드"
  },
  I0C0: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      agi: 5000,
      damage_increase: 57,
      damage_taken: 20
    },
    label: "Hellfire Gloves",
    k_label: "지옥불 장갑"
  },
  I08R: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 5000
    },
    label: "Ascalon",
    k_label: "아스칼론",
    effects: [
      "On Use: Release a powerful explosion, dealing 300000 + STR x150 (45s cd)"
    ],
    k_effects: [
      "사용시 강력한 에너지 폭발 발생 (300000 + STR x150)(쿨타임 45초)"
    ]
  },
  I08S: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      int: 5000
    },
    label: "Phoenix Staff",
    k_label: "피닉스 지팡이",
    effects: ["On use, summons a phoenix (lasts 20s, 120s cd)"],
    k_effects: ["사용시 20초간 피닉스 소환 (쿨타임 120초)"]
  },
  I08T: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      int: 5000,
      damage_increase: 20
    },
    label: "Laevateinn",
    k_label: "레바테인",
    effects: ["Nearby allies gain 20% bonus damage"],
    k_effects: ["주변 아군에게 추가데미지 20%효과 오라"]
  },
  I08V: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      agi: 5000,
      attack_speed: 160,
      attack_agi: true,
      attack_real: 28
    },
    label: "Moonlight Dagger",
    k_label: "달빛 단검"
  },
  I0CE: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 5000,
      attack_speed: 100,
      attack_str: true,
      attack_real: 30
    },
    label: "Mjollnir",
    k_label: "묠니르"
  },
  I08W: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      int: 5000,
      mp: 20000,
      contract: 0.0000035,
      int_tick: true
    },
    label: "Sage's Staff",
    k_label: "현자의 지팡이"
  },
  I08Y: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 4000,
      agi: 4000,
      attack_str_agi: true,
      attack_real: 7
    },
    label: "Bloody Moonlight Dagger",
    k_label: "붉은달빛 단검",
    effects: [
      "On Use: Causes an explosion of moonlight, dealing 300000 + (STR + AGI) x70 (80s cd)"
    ],
    k_effects: ["사용시 달빛 폭발 발생 (300000 + (STR + AGI) x70)(쿨타임 80초)"]
  },
  I095: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 4000,
      int: 4000,
      int_tick: true,
      attack_str_int_real: 28
    },
    label: "Hades Chaos Staff",
    k_label: "하데스의 혼돈지팡이"
  },
  I094: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      int: 5000,
      int_tick: true,
      attack_int_real: 70
    },
    label: "Hades Staff",
    k_label: "하데스의 지팡이"
  },
  I09T: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 5000,
      hp: 30000
    },
    label: "Waterstone Sword",
    k_label: "세계수의 검",
    effects: [
      "Every 10 attacks will recover STR x4 HP (9s cd)",
      "Every 6 spells will recover STR x4 HP (10s cd)",
      "On Use: Restores STR x6 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (STR x4)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (STR x4)(쿨타임 10초)",
      "사용시  생명력회복 (STR x6)(쿨타임 120초)"
    ]
  },
  I09U: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      agi: 5000,
      hp: 30000
    },
    label: "Waterstone Dagger",
    k_label: "세계수의 단검",
    effects: [
      "Every 10 attacks will recover AGI x4 HP (9s cd)",
      "Every 6 spells will recover AGI x4 HP (10s cd)",
      "On Use: Restores AGI x6 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (AGI x4)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (AGI x4)(쿨타임 10초)",
      "사용시  생명력회복 (AGI x6)(쿨타임 120초)"
    ]
  },
  I09V: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      int: 5000,
      hp: 30000
    },
    label: "Waterstone Staff",
    k_label: "세계수의 지팡이",
    effects: [
      "Every 4 spells will recover INT x5 HP (10s cd)",
      "On use, restore INT x6 health to nearby allies (80s cd"
    ],
    k_effects: [
      "스킬사용 4회시 생명력 회복 (INT x5)(쿨타임 10초)",
      "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x6)(쿨타임 80초)"
    ]
  },
  I089: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 400,
      int: 1500
    },
    label: "High Blood Robes",
    k_label: "고수의 로브"
  },
  I08J: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 600,
      agi: 1200,
      hp: 10000,
      damage_taken: -9
    },
    label: "Dwarven High Leather Armor",
    k_label: "드워프의 고급 가죽 갑옷"
  },
  I08I: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 700,
      str: 1200,
      hp: 10000,
      damage_taken: -9
    },
    label: "Dwarven High Armor",
    k_label: "드워프의 고급 갑옷"
  },
  I08K: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 500,
      int: 1300,
      hp: 10000,
      damage_taken: -9
    },
    label: "Dwarven High Robe",
    k_label: "드워프의 고급 로브"
  },
  I06B: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 600,
      str: 1200,
      agi: 1200,
      int: 1200,
      hp: 10000,
      max_health: 10
    },
    label: "Earth Armor",
    k_label: "대지의 갑옷"
  },
  I08A: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 500,
      int: 2500
    },
    label: "The Master's Robe",
    k_label: "달인의 로브"
  },
  I06R: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 800,
      str: 1700,
      hp: 10000,
      hp_regen: -500,
      flame_armor: 15
    },
    label: "Magical Flame Armor",
    k_label: "마계의 불꽃 갑옷"
  },
  I06S: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 300,
      int: 1700,
      damage_increase: 25,
      damage_taken: 5
    },
    label: "Maestra's Flame Robe",
    k_label: "마계의 불꽃 로브"
  },
  I08M: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 700,
      agi: 1700,
      hp: 15000,
      damage_taken: -12
    },
    label: "Dwarven Exquisite Leather Armor",
    k_label: "드워프의 최고급 가죽 갑옷"
  },
  I08L: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 800,
      str: 1700,
      hp: 15000,
      damage_taken: -12
    },
    label: "Dwarven Exquisite Armor",
    k_label: "드워프의 최고급 갑옷"
  },
  I08N: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 600,
      int: 1800,
      hp: 15000,
      damage_taken: -12
    },
    label: "Dwarven Exquisite Robe",
    k_label: "드워프의 최고급 로브"
  },
  I03H: {
    type: "armor",
    color: "orange",
    stats: {
      armor: 1000,
      str: 2500,
      hp: 15000,
      hp_regen: -800,
      flame_armor: 23
    },
    label: "Black Earth Flame Armor",
    k_label: "검은 대지의 불꽃 갑옷"
  },
  I042: {
    type: "armor",
    color: "orange",
    stats: {
      armor: 600,
      int: 2500,
      damage_taken: 10,
      damage_increase: 40
    },
    label: "Black Earth Flame Robe",
    k_label: "검은 대지의 불꽃 로브"
  },
  I07N: {
    type: "armor",
    color: "orange",
    stats: {
      armor: 600,
      int: 2500,
      mp: 15000,
      mps: 25
    },
    label: "Refined Mana Robe",
    k_label: "드레곤 마력 로브"
  },
  I0B8: {
    type: "armor",
    color: "orange",
    stats: {
      armor: 700,
      agi: 2400,
      hp: 15000,
      movement_speed: 150,
      damage_increase: 22
    },
    label: "Agile Leather Vest",
    k_label: "음속의 가죽갑옷"
  },
  I0B7: {
    type: "armor",
    color: "orange",
    stats: {
      armor: 800,
      str: 2400,
      hp: 15000,
      movement_speed: 150,
      damage_increase: 22
    },
    label: "Agile Plate Armor",
    k_label: "음속의 갑옷"
  },
  I0B9: {
    type: "armor",
    color: "orange",
    stats: {
      armor: 600,
      int: 2400,
      hp: 15000,
      movement_speed: 150,
      damage_increase: 22
    },
    label: "Agile Cloak",
    k_label: "음속의 로브"
  },
  I0BJ: {
    type: "armor",
    color: "orange",
    stats: {
      armor: 800,
      int: 2100,
      str: 2100,
      agi: 2100,
      hp: 15000,
      max_health: 16
    },
    label: "Mother Tree's Life Armor",
    k_label: "마더트리의 생명의 갑옷"
  },
  I08O: {
    type: "armor",
    color: "orange",
    stats: {
      armor: 900,
      str: 2500,
      hp: 20000,
      damage_taken: -15
    },
    label: "Mithril Armor",
    k_label: "미스릴 갑옷"
  },
  I08P: {
    type: "armor",
    color: "orange",
    stats: {
      armor: 800,
      agi: 2600,
      hp: 20000,
      damage_taken: -15
    },
    label: "Mithril Greaves",
    k_label: "미스릴 경갑"
  },
  I08Q: {
    type: "armor",
    color: "orange",
    stats: {
      armor: 700,
      int: 2700,
      hp: 20000,
      damage_taken: -15
    },
    label: "Mithril Robe",
    k_label: "미스릴 로브"
  },
  I0BL: {
    type: "armor",
    color: "blue",
    stats: {
      armor: 1200,
      str: 3500,
      hp_regen: -1100,
      hp: 20000,
      flame_armor: 33
    },
    label: "Hellfire Armor",
    k_label: "지옥불 갑옷"
  },
  I0BM: {
    type: "armor",
    color: "blue",
    stats: {
      armor: 700,
      int: 3500,
      damage_taken: 15,
      damage_increase: 55
    },
    label: "Hellfire Robe",
    k_label: "지옥불 로브"
  },
  I0BN: {
    type: "armor",
    color: "blue",
    stats: {
      armor: 800,
      int: 2700,
      str: 2700,
      agi: 2700,
      hp: 20000,
      hp_regen_percent: 2
    },
    label: "Waterstone Armor",
    k_label: "세계수 줄기 갑옷"
  },
  I0BO: {
    type: "armor",
    color: "blue",
    stats: {
      armor: 700,
      int: 3500,
      mp: 25000,
      mps: 30
    },
    label: "Refined Mana Crystal Robe",
    k_label: "정제된 드레곤 마력 로브"
  },
  I0BK: {
    type: "armor",
    color: "blue",
    stats: {
      armor: 900,
      int: 2800,
      str: 2800,
      agi: 2800,
      hp: 20000,
      max_health: 21
    },
    label: "Gaia's Armor",
    k_label: "가이아 갑옷"
  },
  I0BA: {
    type: "armor",
    color: "blue",
    stats: {
      armor: 900,
      agi: 3500,
      hp: 20000,
      movement_speed: 150,
      damage_increase: 30
    },
    label: "Leather Armor of Wind",
    k_label: "광속의 가죽갑옷"
  },
  I0BB: {
    type: "armor",
    color: "blue",
    stats: {
      armor: 1000,
      str: 3500,
      hp: 20000,
      movement_speed: 150,
      damage_increase: 30
    },
    label: "Armor of Wind",
    k_label: "광속의 갑옷"
  },
  I0BC: {
    type: "armor",
    color: "blue",
    stats: {
      armor: 700,
      int: 3500,
      hp: 20000,
      movement_speed: 150,
      damage_increase: 30
    },
    label: "Aqua Robes",
    k_label: "광속의 로브"
  },
  I0BH: {
    type: "armor",
    color: "blue",
    stats: {
      armor: 1000,
      str: 3500,
      hp: 25000,
      damage_taken: -18
    },
    label: "Exquisite Mithril Armor",
    k_label: "최고급 미스릴 갑옷"
  },
  I0BI: {
    type: "armor",
    color: "blue",
    stats: {
      armor: 900,
      agi: 3500,
      hp: 25000,
      damage_taken: -18
    },
    label: "Exquisite Mithril Greaves",
    k_label: "최고급 미스릴 경갑"
  },
  I0BG: {
    type: "armor",
    color: "blue",
    stats: {
      armor: 800,
      int: 3500,
      hp: 25000,
      damage_taken: -18
    },
    label: "Exquisite Mithril Robe",
    k_label: "최고급 미스릴 로브"
  },
  I03L: {
    type: "accessory",
    color: "purple",
    stats: {
      int: 800,
      str: 800,
      agi: 800,
      hp: 10000,
      mp: 5000,
      movement_speed: 150
    },
    label: "The Ring of Madness",
    k_label: "광기의 반지"
  },
  I044: {
    type: "accessory",
    color: "purple",
    stats: {
      int: 800,
      str: 800,
      agi: 800,
      damage_increase: 15
    },
    label: "Ring of Destruction",
    k_label: "파괴의 반지"
  },
  I04X: {
    type: "accessory",
    color: "purple",
    stats: {
      int: 1200,
      str: 1200,
      agi: 1200,
      armor: 300,
      movement_speed: 150,
      magic_resistance: 13
    },
    label: "Branches of the Mother Tree",
    k_label: "마더트리의 나뭇가지"
  },
  I06W: {
    type: "accessory",
    color: "purple",
    stats: {
      int: 1100,
      str: 1100,
      agi: 1100,
      damage_increase: 20
    },
    label: "Blazing Demonic Ring",
    k_label: "타오르는 악마의 반지"
  },
  I06U: {
    type: "accessory",
    color: "purple",
    stats: {
      int: 1200,
      str: 1200,
      agi: 1200,
      hp: 20000,
      mp: 10000,
      movement_speed: 150,
      hp_regen: 700
    },
    label: "Ring of Blazing Vitality",
    k_label: "타오르는 마계의 반지"
  },
  I07J: {
    type: "accessory",
    color: "orange",
    stats: {
      int: 1700,
      str: 1700,
      agi: 1700,
      damage_increase: 15
    },
    label: "Blueberry Ring",
    k_label: "드래곤 보석 반지",
    effects: ["On Use: Increase Bonus Damage by 40% for 15 seconds (120s cd)"],
    k_effects: ["사용시 15초간 추가데미지 40%증가(쿨타임 120초)"]
  },
  I08B: {
    type: "accessory",
    color: "orange",
    stats: {
      int: 1700,
      str: 1700,
      agi: 1700,
      hp: 25000,
      mp: 15000,
      movement_speed: 150,
      hp_regen: 1000
    },
    label: "Diamond Ring",
    k_label: "금강석 반지"
  },
  I08C: {
    type: "accessory",
    color: "orange",
    stats: {
      int: 1700,
      str: 1700,
      agi: 1700,
      damage_increase: 30
    },
    label: "Frozen Spirit Ring",
    k_label: "얼어붙은 청옥 반지"
  },
  I08F: {
    type: "accessory",
    color: "blue",
    stats: {
      int: 2500,
      str: 2500,
      agi: 2500,
      damage_increase: 23
    },
    label: "Black Soul Ring",
    k_label: "요르단 반지",
    effects: ["On Use: Increased Bonus Damage by 60% for 15 seconds (120s cd)"],
    k_effects: ["사용시 15초간 추가데미지 60%증가(쿨타임 120초)"]
  },
  I08E: {
    type: "accessory",
    color: "blue",
    stats: {
      int: 2500,
      str: 2500,
      agi: 2500,
      damage_increase: 40
    },
    label: "Blue Sky Jewel",
    k_label: "창천의 청옥"
  },
  I08D: {
    type: "accessory",
    color: "blue",
    stats: {
      int: 2500,
      str: 2500,
      agi: 2500,
      hp: 33000,
      mp: 20000,
      movement_speed: 150,
      hp_regen: 1500
    },
    label: "Stone of Blight",
    k_label: "칠흑의 금강석"
  },
  I0CK: {
    type: "accessory",
    color: "blue",
    stats: {
      str: 3500,
      hp: 40000
    },
    label: "Refined Dragon Heart",
    k_label: "정제된 드래곤 하트",
    effects: ["Recover 40% of MAX HP every 28 seconds"],
    k_effects: ["28초마다 최대체력 40%회복"]
  },
  I03S: {
    type: "helmet",
    color: "purple",
    stats: {
      armor: 500,
      int: 600,
      str: 600,
      agi: 600,
      damage_taken: -7
    },
    label: "Helm of Dazzling Light",
    k_label: "눈부신 빛의 투구"
  },
  I04S: {
    type: "helmet",
    color: "purple",
    stats: {
      armor: 400,
      int: 600,
      str: 600,
      agi: 600
    },
    label: "Helmet of the Earth",
    k_label: "대지의 가호 투구",
    effects: ["On Use: Create a Anti Magic Shield for 5 seconds (150s cd)"],
    k_effects: ["사용시 5초간 매직쉴드(쿨타임 150초)"]
  },
  I04R: {
    type: "helmet",
    color: "purple",
    stats: {
      armor: 400,
      int: 600,
      str: 600,
      agi: 600,
      damage_increase: 16
    },
    label: "Mage's Helm",
    k_label: "마기의 투구"
  },
  I03R: {
    type: "helmet",
    color: "orange",
    stats: {
      armor: 600,
      int: 900,
      str: 900,
      agi: 900,
      damage_increase: 22
    },
    label: "Black Earth Helmet",
    k_label: "검은 기운의 투구"
  },
  I07I: {
    type: "helmet",
    color: "orange",
    stats: {
      armor: 600,
      int: 900,
      str: 900,
      agi: 900
    },
    label: "Dragonic Helmet",
    k_label: "드레곤 가죽 마법투구",
    effects: ["On Use: Create a Anti Magic Shield for 10 seconds (180s cd)"],
    k_effects: ["사용시 10초간 마법면혁(쿨타임 180초)"]
  },
  I07H: {
    type: "helmet",
    color: "orange",
    stats: {
      armor: 600,
      int: 900,
      str: 900,
      agi: 900,
      damage_taken: -10
    },
    label: "Dragon Leather Helm",
    k_label: "드레곤 가죽 투구"
  },
  I0CJ: {
    type: "helmet",
    color: "orange",
    stats: {
      armor: 400,
      int: 1500,
      mp: 10000
    },
    label: "Foresight of the wise",
    k_label: "현자의 지혜",
    effects: ["Recover 60% of maximum Mana on use (120s cd)"],
    k_effects: ["사용시 MP60% 회복 (쿨타임 120초)"]
  },
  I08X: {
    type: "helmet",
    color: "orange",
    stats: {
      armor: 400,
      int: 900,
      str: 900,
      agi: 900,
      damage_increase: 35,
      damage_taken: 15
    },
    label: "Demonic Sovereign's Horn",
    k_label: "고위 악마의뿔"
  },
  I03B: {
    type: "artifact",
    color: "purple",
    stats: {
      str: 600,
      agi: 600,
      int: 600,
      damage_increase: 10
    },
    label: "Corrupting Mask",
    k_label: "순수한 악의 결정"
  },
  I06H: {
    type: "artifact",
    color: "purple",
    stats: {
      str: 900,
      agi: 900,
      int: 900,
      armor: 300,
      hp: 8000,
      shield: 10000
    },
    label: "Heavenly Spirit Barrier",
    k_label: "천상의 수호벽"
  },
  I04Q: {
    type: "artifact",
    color: "orange",
    stats: {
      str: 1100,
      agi: 1100,
      int: 1100,
      damage_increase: 25
    },
    label: "Dark Wings",
    k_label: "다크윙"
  },
  I079: {
    type: "artifact",
    color: "orange",
    stats: {
      str: 1200,
      agi: 1200,
      int: 1200,
      attack_speed: 100,
      movement_speed: 150
    },
    label: "Darkened Boots",
    k_label: "검은 대지의 각반",
    effects: ["On use: Dashes forward (10s cd)"],
    k_effects: ["사용시 전방으로 대쉬(쿨타임10초)"]
  },
  I088: {
    type: "artifact",
    color: "orange",
    stats: {
      str: 1100,
      agi: 1100,
      int: 1100,
      armor: 400,
      hp: 13000,
      shield: 15000
    },
    label: "Dazzling Heavenly Spirit Barrier",
    k_label: "눈부신 천상의 수호벽"
  },
  I08G: {
    type: "artifact",
    color: "blue",
    stats: {
      str: 2000,
      agi: 2000,
      int: 2000,
      armor: 500,
      hp: 20000,
      shield: 25000
    },
    label: "Rho Aias",
    k_label: "로 아이아스"
  },
  I08H: {
    type: "artifact",
    color: "blue",
    stats: {
      str: 2000,
      agi: 2000,
      int: 2000,
      damage_increase: 35
    },
    label: "Nightmare Wings",
    k_label: "나이트메어 윙"
  },
  I08U: {
    type: "artifact",
    color: "blue",
    stats: {
      str: 2000,
      agi: 2000,
      int: 2000,
      damage_increase: 17
    },
    label: "Wings of Despair",
    k_label: "절망의 날개",
    effects: ["Enemies within range take an additional 17% Damage"],
    k_effects: ["절망의 기운을 뿜어대는 날개 절망의 대악마의 보물중하나"]
  },
  I0BE: {
    type: "artifact",
    color: "blue",
    stats: {
      str: 2000,
      agi: 2000,
      int: 2000,
      hp: 15000
    },
    label: "Archangel's Wings",
    k_label: "대천사의 날개",
    effects: [
      "When HP is below 40%, any damage taken will restore 30% of MAX HP",
      "And 12% of MAX HP every second for 10 seconds (120s cd)"
    ],
    k_effects: [
      "생명력이 40%이하일때 즉사가 아닌 공격을받을면 즉시 생명력 30%를 회복하며",
      "10초간 초당 생명력 8% 회복 (쿨타임 120초)"
    ]
  },
  I0BF: {
    type: "artifact",
    color: "blue",
    stats: {
      str: 2100,
      agi: 2100,
      int: 2100,
      attack_speed: 160,
      movement_speed: 150
    },
    label: "Lightning Boots",
    k_label: "번개각인 각반",
    effects: ["On Use: Dash forward (8s cd)"],
    k_effects: ["사용시 전방으로 대쉬(쿨타임8초)"]
  },
  I0CG: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      str: 7000,
      attack_speed: 160,
      attack_str: true,
      attack_real: 48
    },
    label: "Archangel's Judgement +1",
    k_label: "대천사의 심판 +1"
  },
  I0C6: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      int: 7000,
      damage_increase: 60
    },
    label: "Archangel's Amber Staff +1",
    k_label: "대천사의 증폭 지팡이 +1"
  },
  I0CA: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      agi: 7000,
      damage_increase: 90,
      damage_taken: 29
    },
    label: "Archangel's Gauntlets +1",
    k_label: "대천사의 건들릿 +1"
  },
  I096: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      agi: 7000,
      attack_speed: 200,
      attack_agi: true,
      attack_real: 49
    },
    label: "Archangel's Dagger +1",
    k_label: "대천사의 단검 +1"
  },
  I09E: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      str: 5300,
      agi: 5300,
      int: 5300
    },
    label: "Excalibur +1",
    k_label: "대천사의 검 +1",
    effects: [
      "On Use: Fires a laser in chosen direction (Deals 340000 + (STR + AGI + INT) x225 (120s cd)"
    ],
    k_effects: [
      "사용시 정의의 일격 시전 (340000 + (STR + AGI + INT) x225)(쿨타임 120초)"
    ]
  },
  I090: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      agi: 7000,
      damage_increase: 60
    },
    label: "Archangel's Blade +1",
    k_label: "대천사의 도검 +1"
  },
  I0AE: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      int: 7000,
      mp: 28000,
      contract: 0.0000044,
      int_tick: true
    },
    label: "Niflheim +1",
    k_label: "대천사의 마력 지팡이 +1"
  },
  I0AH: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      str: 7000,
      hp: 65000
    },
    label: "Angelic Sword of Life +1",
    k_label: "대천사의 생명검 +1",
    effects: [
      "Every 10 attacks will recover STR x5.5 HP (9s cd)",
      "Every 6 spells will recover STR x5.5 HP (10s cd)",
      "On Use: Restores STR x7.5 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (STR x5.5)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (STR x5.5)(쿨타임 10초)",
      "사용시  생명력회복 (STR x7.5)(쿨타임 120초)"
    ]
  },
  I0AK: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      agi: 7000,
      hp: 65000
    },
    label: "Angelic Bow of Life +1",
    k_label: "대천사의 생명의활 +1",
    effects: [
      "Every 10 attacks will recover AGI x5.5 HP (9s cd)",
      "Every 6 spells will recover AGI x5.5 HP (10s cd)",
      "On Use: Restores AGI x7.5 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복(AGI x5.5)(쿨타임 10초)",
      "스킬사용 6회시 생명력회복(AGI x5.5)(쿨타임 10초)",
      "사용시  생명력회복 (AGI x7.5 )(쿨타임 120초)"
    ]
  },
  I0AN: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      int: 7000,
      hp: 65000
    },
    label: "Archangel's Life Staff +1",
    k_label: "대천사의 생명지팡이 +1",
    effects: [
      "Every 4 spells will recover INT x6.5 HP (10s cd)",
      "On Use: Restore INT x7.5 HP of all allies within range (80s cd)"
    ],
    k_effects: [
      "스킬사용 4회시 생명력 회복 (INT x6.5)(쿨타임 10초)",
      "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x7.5)(쿨타임 80초)"
    ]
  },
  I09A: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      str: 5900,
      agi: 5900,
      attack_str_agi: true,
      attack_real: 15
    },
    label: "Archangel's Sword +1",
    k_label: "대천사의 소검 +1",
    effects: [
      "On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x105 damage (80s cd)"
    ],
    k_effects: [
      "사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x105)(쿨타임 80초)"
    ]
  },
  I09Q: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      str: 5900,
      int: 5900,
      int_tick: true,
      attack_str_int_real: 45.6
    },
    label: "Archangel's Battle Staff +1",
    k_label: "대천사의 전투지팡이 +1"
  },
  I09M: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      int: 7000,
      int_tick: true,
      attack_int_real: 114
    },
    label: "Archangel's Staff +1",
    k_label: "대천사의 지팡이 +1"
  },
  I09I: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      str: 7000
    },
    label: "Archangel's Glaive +1",
    k_label: "대천사의 창 +1",
    effects: [
      "On Use: Causes an explosion, dealing 500000 + STR x230 damage (45s cd)"
    ],
    k_effects: ["사용시 용기의 폭발 시전 (500000 + STR x230)(쿨타임 45초)"]
  },
  I0AR: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      int: 7000
    },
    label: "Blessed Staff +1",
    k_label: "대천사장의 지팡이 +1",
    effects: [
      "Summons a high-ranking angel, inflicting (INT x 23) damage per hit"
    ],
    k_effects: [
      "사용시 고위천사를 소환하며, 매 타격마다 (지능 x 23)의 피해를 입힙니다."
    ]
  },
  I0AT: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      int: 7000,
      damage_increase: 30
    },
    label: "Archangel's Light Staff +1",
    k_label: "대천사의 빛의 지팡이 +1",
    effects: ["Increases nearby allies damage by 27%"],
    k_effects: ["주변아군 추가데미지 30%증가 오라 생성"]
  },
  I0CH: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      str: 7500,
      attack_speed: 160,
      attack_str: true,
      attack_real: 56
    },
    label: "Archangel's Judgement +2",
    k_label: "대천사의 심판 +2"
  },
  I0CB: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      agi: 7500,
      damage_increase: 105,
      damage_taken: 33
    },
    label: "Archangel's Gauntlets +2",
    k_label: "대천사의 건들릿 +2"
  },
  I0AI: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      str: 7500,
      hp: 80000
    },
    label: "Angelic Sword of Life +2",
    k_label: "대천사의 생명검 +2",
    effects: [
      "Every 10 attacks will recover STR x6 HP (9s cd)",
      "Every 6 spells will recover STR x6 HP (10s cd)",
      "On Use: Restores STR x8 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (STR x6)(쿨타임 10초)",
      "스킬사용 6회시 생명력회복 (STR x6)(쿨타임 10초)",
      "사용시  생명력회복 (STR x8)(쿨타임 120초)"
    ]
  },
  I09F: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      str: 5600,
      agi: 5600,
      int: 5600
    },
    label: "Excalibur +2",
    k_label: "대천사의 검 +2",
    effects: [
      "On Use: Fires a laser in chosen direction (Deals 380000 + (STR + AGI + INT) x250 (120s cd)"
    ],
    k_effects: [
      "사용시 정의의 일격 시전 (380000 + (STR + AGI + INT) x250)(쿨타임 120초)"
    ]
  },
  I097: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      agi: 7500,
      attack_speed: 200,
      attack_agi: true,
      attack_real: 58
    },
    label: "Archangel's Dagger +2",
    k_label: "대천사의 단검 +2"
  },
  I091: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      agi: 7500,
      damage_increase: 65
    },
    label: "Archangel's Blade +2",
    k_label: "대천사의 도검 +2"
  },
  I0C1: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      int: 7500,
      damage_increase: 33
    },
    label: "Archangel's Light Staff +2",
    k_label: "대천사의 빛의 지팡이 +2",
    effects: ["Increases nearby allies damage by 33%"],
    k_effects: ["주변아군 추가데미지 33%증가 오라 생성"]
  },
  I0AF: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      int: 7500,
      mp: 32000,
      contract: 0.0000046,
      int_tick: true
    },
    label: "Niflheim +2",
    k_label: "대천사의 마력 지팡이 +2"
  },
  I0AL: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      agi: 7500,
      hp: 80000
    },
    label: "Angelic Bow of Life +2",
    k_label: "대천사의 생명의활 +2",
    effects: [
      "Every 10 attacks will recover AGI x6 HP (9s cd)",
      "Every 6 spells will recover AGI x6 HP (10s cd)",
      "On Use: Restores AGI x8 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (AGI x6)(쿨타임 10초)",
      "스킬사용 6회시 생명력회복 (AGI x6)(쿨타임 10초)",
      "사용시  생명력회복 (AGI x8)(쿨타임 120초)"
    ]
  },
  I0AO: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      int: 7500,
      hp: 80000
    },
    label: "Archangel's Life Staff +2",
    k_label: "대천사의 생명지팡이 +2",
    effects: [
      "Every 4 spells will recover INT x7 HP (10s cd)",
      "On Use: Restore INT x8 HP of all allies within range (80s cd)"
    ],
    k_effects: [
      "스킬사용 4회시 생명력 회복 (INT x7)(쿨타임 10초)",
      "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x8)(쿨타임 80초)"
    ]
  },
  I0C7: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      int: 7500,
      damage_increase: 65
    },
    label: "Archangel's Amber Staff +2",
    k_label: "대천사의 증폭 지팡이 +2"
  },
  I09B: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      str: 6300,
      agi: 6300,
      attack_str_agi: true,
      attack_real: 17
    },
    label: "Archangel's Sword +2",
    k_label: "대천사의 소검 +2",
    effects: [
      "On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x120 damage (80s cd)"
    ],
    k_effects: [
      "사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x120)(쿨타임 80초)"
    ]
  },
  I09R: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      str: 6300,
      int: 6300,
      int_tick: true,
      attack_str_int_real: 50.4
    },
    label: "Archangel's Battle Staff +2",
    k_label: "대천사의 전투지팡이 +2"
  },
  I09N: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      int: 7500,
      int_tick: true,
      attack_int_real: 126
    },
    label: "Archangel's Staff +2",
    k_label: "대천사의 지팡이 +2"
  },
  I09J: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      str: 7500
    },
    label: "Archangel's Glaive +2",
    k_label: "대천사의 창 +2",
    effects: [
      "On Use: Causes an explosion, dealing 600000 + STR x260 damage (45s cd)"
    ],
    k_effects: ["사용시 용기의 폭발 시전 (600000 + STR x260)(쿨타임 45초)"]
  },
  I0C3: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      int: 7500
    },
    label: "Blessed Staff +2",
    k_label: "대천사장의 지팡이 +2",
    effects: [
      "Summons a high-ranking angel, inflicting (INT x 26) damage per hit"
    ],
    k_effects: [
      "사용시 고위천사를 소환하며, 매 타격마다 (지능 x 26)의 피해를 입힙니다"
    ]
  },
  I0CI: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      str: 8000,
      attack_speed: 160,
      attack_str: true,
      attack_real: 64
    },
    label: "Archangel's Judgement +3",
    k_label: "대천사의 심판 +3"
  },
  I0CC: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      agi: 8000,
      damage_increase: 130,
      damage_taken: 37
    },
    label: "Archangel's Gauntlets +3",
    k_label: "대천사의 건들릿 +3"
  },
  I0AJ: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      str: 8000,
      hp: 95000
    },
    label: "Angelic Sword of Life +3",
    k_label: "대천사의 생명검 +3",
    effects: [
      "Every 10 attacks will recover STR x6.7 HP (9s cd)",
      "Every 6 spells will recover STR x6.7 HP (10s cd)",
      "On Use: Restores STR x8.7 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (STR x6.7)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (STR x6.7)(쿨타임 10초)",
      "사용시  생명력회복 (STR x8.7)(쿨타임 120초)"
    ]
  },
  I09G: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      str: 6000,
      agi: 6000,
      int: 6000
    },
    label: "Excalibur +3",
    k_label: "대천사의 검 +3",
    effects: [
      "On Use: Fires a laser in chosen direction (Deals 420000 + (STR + AGI + INT) x280 (120s cd)"
    ],
    k_effects: [
      "사용시 정의의 일격 시전 (420000 + (STR + AGI + INT) x280)(쿨타임 120초)"
    ]
  },
  I098: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      agi: 8000,
      attack_speed: 200,
      attack_agi: true,
      attack_real: 65
    },
    label: "Archangel's Dagger +3",
    k_label: "대천사의 단검 +3"
  },
  I092: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      agi: 8000,
      damage_increase: 70
    },
    label: "Archangel's Blade +3",
    k_label: "대천사의 도검 +3"
  },
  I0AG: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      int: 8000,
      mp: 36000,
      contract: 0.0000049,
      int_tick: true
    },
    label: "Niflheim +3",
    k_label: "대천사의 마력 지팡이 +3"
  },
  I0AM: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      agi: 8000,
      hp: 95000
    },
    label: "Angelic Bow of Life +3",
    k_label: "대천사의 생명의활 +3",
    effects: [
      "Every 10 attacks will recover AGI x6.7 HP (9s cd)",
      "Every 6 spells will recover AGI x6.7 HP (10s cd)",
      "On Use: Restores AGI x8.7 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (AGI x6.7)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (AGI x6.7)(쿨타임 10초)",
      "사용시  생명력회복 (AGI x8.7)(쿨타임 120초)"
    ]
  },
  I0AP: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      int: 8000,
      hp: 95000
    },
    label: "Archangel's Life Staff +3",
    k_label: "대천사의 생명지팡이 +3",
    effects: [
      "Every 4 spells will recover INT x7.5 HP (10s cd)",
      "On Use: Restore INT x8.7 HP of all allies within range (80s cd)"
    ],
    k_effects: [
      "스킬사용 4회시 생명력 회복 (INT x7.5)(쿨타임 10초)",
      "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x8.7)(쿨타임 80초)"
    ]
  },
  I09C: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      str: 6700,
      agi: 6700,
      attack_str_agi: true,
      attack_real: 19
    },
    label: "Archangel's Sword +3",
    k_label: "대천사의 소검 +3",
    effects: [
      "On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x135 damage (80s cd)"
    ],
    k_effects: [
      "사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x135)(쿨타임 80초)"
    ]
  },
  I09S: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      str: 6700,
      int: 6700,
      int_tick: true,
      attack_str_int_real: 60
    },
    label: "Archangel's Battle Staff +3",
    k_label: "대천사의 전투지팡이 +3"
  },
  I09O: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      int: 8000,
      int_tick: true,
      attack_int_real: 147
    },
    label: "Archangel's Staff +3",
    k_label: "대천사의 지팡이 +3"
  },
  I09K: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      str: 8000
    },
    label: "Archangel's Glaive +3",
    k_label: "대천사의 창 +3",
    effects: [
      "On Use: Causes an explosion, dealing 700000 + STR x300 damage (45s cd)"
    ],
    k_effects: ["사용시 용기의 폭발 시전 (700000 + STR x300)(쿨타임 45초)"]
  },
  I0C2: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      int: 8000,
      damage_increase: 37
    },
    label: "Archangel's Light Staff +3",
    k_label: "대천사의 빛의 지팡이 +3",
    effects: ["Increases nearby allies damage by 37%"],
    k_effects: ["주변아군 추가데미지 37%증가 오라 생성"]
  },
  I0C4: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      int: 8000
    },
    label: "Blessed Staff +3",
    k_label: "대천사장의 지팡이 +3",
    effects: [
      "Summons a high-ranking angel, inflicting (INT x 29) damage per hit"
    ],
    k_effects: [
      "사용시 고위천사를 소환하며, 매 타격마다 (지능 x 29)의 피해를 입힙니다."
    ]
  },
  I0C8: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      int: 8000,
      damage_increase: 70
    },
    label: "Archangel's Amber Staff +3",
    k_label: "대천사의 증폭 지팡이 +3"
  },
  I0A7: {
    type: "material",
    color: "black",
    label: "Lower Aggregate Energy",
    k_label: "하급 에너지 집합체"
  },
  I0A8: {
    type: "material",
    color: "black",
    label: "Intermediate Aggregate Energy",
    k_label: "중급 에너지 집합체"
  },
  I0A9: {
    type: "material",
    color: "black",
    label: "Greater Aggregate Energy",
    k_label: "상급 에너지 집합체"
  },
  I0AA: {
    type: "material",
    color: "black",
    label: "Superlative Aggregate Energy",
    k_label: "최상급 에너지 집합체"
  },
  I04D: {
    type: "helmet",
    color: "orange",
    stats: {
      armor: 500,
      str: 800,
      agi: 800,
      int: 800,
      damage_increase: 17
    },
    label: "Beresa's Horn",
    k_label: "베레스라의 뿔"
  },
  I04C: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 5000,
      damage_increase: 35
    },
    label: "Beresa’s Sword",
    k_label: "베레스라의 검"
  },
  I06V: {
    type: "helmet",
    color: "purple",
    stats: {
      str: 600,
      agi: 600,
      int: 600,
      damage_increase: 20,
      damage_taken: 10
    },
    label: "Demonic Leather Helm",
    k_label: "악마의 가죽 투구"
  },
  I06G: {
    type: "helmet",
    color: "purple",
    stats: {
      armor: 300,
      int: 1000,
      mp: 5000
    },
    label: "Helm of Heavenly Wisdom",
    k_label: "천상의 지혜",
    effects: ["Restore 40% of maximum MP on use (180s cd)"],
    k_effects: ["사용시 MP40% 회복 (쿨타임 180초)"]
  },
  I043: {
    type: "accessory",
    color: "purple",
    stats: {
      str: 600,
      agi: 600,
      int: 600,
      damage_increase: 12
    },
    label: "Enhanced Ring of Approval",
    k_label: "증명의 증폭반지"
  },
  I082: {
    type: "armor",
    color: "orange",
    stats: {
      armor: 600,
      str: 1800,
      agi: 1800,
      int: 1800,
      hp: 15000,
      hp_regen_percent: 1.5
    },
    label: "Elderwood Armor",
    k_label: "마더트리 줄기갑옷"
  },
  I03K: {
    type: "accessory",
    color: "purple",
    stats: {
      str: 600,
      agi: 600,
      int: 600,
      hp: 3000,
      mp: 2000,
      movement_speed: 150
    },
    label: "Ring of Approval",
    k_label: "증명의 반지"
  },
  I04W: {
    type: "artifact",
    color: "purple",
    stats: {
      str: 400,
      agi: 400,
      int: 400
    },
    label: "Wings of Approval",
    k_label: "증명의 날개"
  },
  I03Y: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 28000,
      agi: 1000
    },
    label: "Agile Dagger",
    k_label: "민첩의 단검"
  },
  I03E: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 25000,
      str: 1000
    },
    label: "Sword of Power",
    k_label: "힘의 대검"
  },
  I05U: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 20000,
      int: 1300
    },
    label: "Sword of Intelligence",
    k_label: "지능의 지팡이"
  },
  I05V: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 400,
      str: 500,
      hp: 6000
    },
    label: "Armor of Approval",
    k_label: "증명의 갑옷"
  },
  I04M: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 300,
      agi: 500,
      damage_increase: 8
    },
    label: "Leather Armor of Approval",
    k_label: "증명의 가죽갑옷"
  },
  I040: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 250,
      int: 700,
      mp: 4000
    },
    label: "Robes of Approval",
    k_label: "증명의 로브"
  },
  I03A: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 25000,
      str: 1700
    },
    label: "Destroyer's Axe",
    k_label: "파괴자의 도끼",
    effects: ["On use: Deals 50000 + STR x8 aoe damage and stuns  (120s cd)"],
    k_effects: ["사용시 죽음의 내려찍기를 시전 (50000 + STR x8)(쿨타임 120초)"]
  },
  I041: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 600,
      str: 1000
    },
    label: "The Colosseum Armor",
    k_label: "콜로세움 갑옷",
    effects: ["On use, recover 15000 HP (120s cd)"],
    k_effects: ["사용시 생명력 15000회복 (쿨타임 120초)"]
  },
  I03I: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 400,
      int: 1000,
      damage_increase: 10
    },
    label: "Arc’s Wizard Robe",
    k_label: "아크위저드의 로브"
  },
  I04Y: {
    type: "helmet",
    color: "purple",
    stats: {
      armor: 300,
      str: 400,
      agi: 400,
      int: 400
    },
    label: "Knight's Helm",
    k_label: "기사의 투구",
    effects: ["On Use: Grants a 5 second anti magic shield (200s cd)"],
    k_effects: ["사용시 5초간 매직쉴드(쿨타임 200초)"]
  },
  I03D: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 10000,
      int: 2000
    },
    label: "Bloodied Staff",
    k_label: "피뭍은 지팡이",
    effects: ["On use: grants 700 intelligence for 10 seconds (120s cd)"],
    k_effects: ["사용시 10초간 지능 +700증가 (쿨타임 120초)"]
  },
  I034: {
    type: "material",
    color: "black",
    label: "Essence of Destruction",
    k_label: "파괴의 본능",
    disabled: true
  },
  I03J: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 400,
      agi: 1000,
      hp: 6000
    },
    label: "Insanity's Leather Armor",
    k_label: "광기의 가죽갑옷"
  },
  I03Z: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 25000,
      agi: 1500,
      attack_speed: 80
    },
    label: "Insanity's Dagger",
    k_label: "광기의 단검"
  },
  I03P: {
    type: "artifact",
    color: "purple",
    stats: {
      str: 600,
      agi: 600,
      int: 600,
      movement_speed: 150,
      attack_speed: 50
    },
    label: "Boots of Swiftness",
    k_label: "신속의 신발"
  },
  I046: {
    type: "helmet",
    color: "purple",
    stats: {
      str: 400,
      agi: 400,
      int: 400,
      damage_increase: 10
    },
    label: "Insanity's Helmet",
    k_label: "광기의 투구"
  },
  I05Y: {
    type: "material",
    color: "black",
    label: "Essence of Insanity",
    k_label: "광기의 기운",
    disabled: true
  },
  I062: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 400,
      str: 800,
      agi: 800,
      int: 800,
      hp: 5000,
      max_health: 6
    },
    label: "Armor of Nature",
    k_label: "자연의 갑옷"
  },
  I064: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 30000,
      int: 1600
    },
    label: "Staff of the Elemental",
    k_label: "정령의 지팡이",
    effects: ["Recover INT x3 HP (60s cd)"],
    k_effects: ["사용시 지능비례 생명력 회복 (INT x3)(쿨타임 60초)"]
  },
  I061: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 30000,
      str: 1600
    },
    label: "Sword of the Elemental",
    k_label: "정령의 검",
    effects: ["Recover STR x3 HP (60s cd)"],
    k_effects: ["사용시 힘비례 생명력 회복 (STR x3)(쿨타임 60초)"]
  },
  I063: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 30000,
      agi: 1600
    },
    label: "Spirit Bow",
    k_label: "정령의 활",
    effects: ["Recover AGI x3 HP (60s cd)"],
    k_effects: ["사용시 민첩비례 생명력 회복 (AGI x3)(쿨타임 60초)"]
  },
  I03M: {
    type: "accessory",
    color: "purple",
    stats: {
      str: 800,
      agi: 800,
      int: 800,
      movement_speed: 150,
      magic_resistance: 10,
      armor: 200
    },
    label: "Leaves of the mother tree",
    k_label: "마더트리의 잎"
  },
  I065: {
    type: "material",
    color: "black",
    label: "Elemental Spirit",
    k_label: "정령의 숨결",
    disabled: true
  },
  I067: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 40000,
      str: 1600,
      agi: 1600,
      int: 1600,
      attack_real: 5,
      attack_agi: true
    },
    label: "Sword of Light",
    k_label: "빛의검"
  },
  I068: {
    type: "artifact",
    color: "purple",
    stats: {
      str: 600,
      agi: 600,
      int: 600,
      armor: 200,
      hp: 5000,
      shield: 6000
    },
    label: "Barrier of Light",
    k_label: "빛의 방벽"
  },
  I069: {
    type: "helmet",
    color: "purple",
    stats: {
      armor: 400,
      str: 400,
      agi: 400,
      int: 400,
      damage_taken: -4
    },
    label: "Helm of Light",
    k_label: "빛의 투구"
  },
  I066: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 60000,
      str: 2000,
      agi: 2000,
      int: 2000
    },
    label: "Caliburn",
    k_label: "성검 칼리번",
    effects: [
      "On Use: Deals 100000 + (STR + AGI + INT) x15 aoe dmg and stuns all enemies around user (180s cd)"
    ],
    k_effects: [
      "사용시 빛의 강림 시전 (100000 + (STR + AGI + INT) x15)(쿨타임180초)"
    ]
  },
  I06A: {
    type: "material",
    color: "black",
    label: "Heaven Sigil",
    k_label: "가디언의 증표",
    disabled: true
  },
  I06I: {
    type: "material",
    color: "black",
    label: "Waterstone Fragment",
    k_label: "수호석 핵",
    disabled: true
  },
  I06F: {
    type: "accessory",
    color: "purple",
    stats: {
      str: 1000,
      agi: 1000,
      int: 1000,
      hp: 6000,
      damage_taken: -10
    },
    label: "Waterstone Ring",
    k_label: "수호석 반지"
  },
  I04E: {
    type: "artifact",
    color: "orange",
    stats: {
      str: 1100,
      agi: 1100,
      int: 1100,
      damage_increase: [12, 9.6]
    },
    label: "Helgainer’s Inner Wing",
    k_label: "헬 게이너 날개",
    effects: [
      "Passive: An aura that causes nearby enemies to take 12% Bonus Damage (Range 750)"
    ],
    k_effects: ["추가데미지 12% 의 오라생성 (범위 750)"]
  },
  I06X: {
    type: "武器",
    color: "purple",
    stats: {
      atk: 60000,
      agi: 2500,
      damage_increase: 27,
      damage_taken: 10
    },
    label: "Helgainer’s Claws",
    k_label: "헬게이너 손톱"
  },
  I06T: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 500,
      agi: 1700,
      hp: 10000,
      damage_increase: 15,
      movement_speed: 150
    },
    label: "Agile Leather Armor",
    k_label: "신속의 가죽갑옷"
  },
  I070: {
    type: "stats",
    color: "darkred",
    stats_points: 8,
    label: "Magical Flask",
    k_label: "마계의 영약"
  },
  I051: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 600,
      str: 1700,
      hp: 10000,
      damage_increase: 15,
      movement_speed: 150
    },
    label: "Agile Armor",
    k_label: "신속의 갑옷"
  },
  I0B6: {
    type: "armor",
    color: "purple",
    stats: {
      armor: 400,
      int: 1700,
      hp: 10000,
      damage_increase: 15,
      movement_speed: 150
    },
    label: "Nimble Robe",
    k_label: "신속의 로브"
  },
  I06J: {
    type: "stats",
    color: "darkred",
    label: "Celestial Water",
    k_label: "천계의 영약",
    stats_points: 8
  },
  I06Z: {
    type: "material",
    color: "black",
    label: "Mastermind Token",
    k_label: "수문장 징표",
    disabled: true
  },
  I07C: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      int: 3300,
      damage_increase: 16
    },
    label: "Gloomy Staff",
    k_label: "검은기운의 지팡이",
    effects: ["Emits an aura that adds 16% addtional damage"],
    k_effects: ["자신과 주변 아군들 추가데미지 16% 증가"]
  },
  I077: {
    type: "stats",
    color: "darkred",
    stats_points: 12,
    label: "Black Earth",
    k_label: "검은 대지의 기운"
  },
  I04H: {
    type: "material",
    color: "black",
    label: "Black Clay Powder",
    k_label: "검은 흙가루",
    disabled: true
  },
  I07M: {
    type: "stats",
    color: "darkred",
    stats_points: 12,
    label: "Dragon Meat",
    k_label: "드레곤 고기"
  },
  I07O: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      int: 3300,
      mp: 15000,
      contract: 0.0000028,
      int_tick: true
    },
    label: "Mana Storm Staff",
    k_label: "마나 폭풍 지팡이"
  },
  I07K: {
    type: "material",
    color: "black",
    label: "Crystallized Dragon Eye",
    k_label: "드레곤 슬레이어의 증표",
    disabled: true
  },
  I07G: {
    type: "accessory",
    color: "orange",
    stats: {
      str: 2500,
      hp: 30000
    },
    label: "Dragon Heart",
    k_label: "드래곤 하트",
    effects: ["Recovers 30% of maximum HP every 28 seconds"],
    k_effects: ["28초마다 최대체력 30%회복"]
  },
  I045: {
    type: "accessory",
    color: "orange",
    stats: {
      int: 2700,
      mp: 30000
    },
    label: "Heart of Mana",
    k_label: "마나 하트",
    effects: ["Recovers 30% of maximum mana every 28 seconds"],
    k_effects: ["28초마다 최대마나 30%회복"]
  },
  I07F: {
    type: "artifact",
    color: "blue",
    stats: {
      str: 2000,
      agi: 2000,
      int: 2000,
      attack_speed: 60,
      movement_speed: 20
    },
    label: "Blue Dragon’s Wings",
    k_label: "블루 드레곤 날개",
    effects: [
      "Freeze nearby enemies on use, dealing 150000 + (STR + AGI + INT) x70 (180s cd)",
      "Allies have 20% movement speed and 60% attack speed increased",
      "Enemies have 15% movement speed and attack speed reduced"
    ],
    k_effects: [
      "주변 적군 공이속 15%감소",
      "주변 아군 공속 60% 이속 20%증가",
      "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x70)(쿨타임 180초)"
    ]
  },
  I0BD: {
    type: "artifact",
    color: "orange",
    stats: {
      str: 1100,
      agi: 1100,
      int: 1100,
      hp: 10000
    },
    label: "Angel Wings",
    k_label: "천사의 날개",
    effects: [
      "When HP is below 40%, any damage taken will restore 30% of MAX HP",
      "And 8% of MAX HP every second for 10 seconds (120s cd)"
    ],
    k_effects: [
      "생명력이 40%이하일때 즉사가 아닌 공격을받을면 즉시 생명력 30%를 회복하고",
      "10초간 초당 생명력 8% 회복 (쿨타임 120초)"
    ]
  },
  I07X: {
    type: "material",
    color: "black",
    label: "Mother Tree Bark",
    k_label: "마더 트리의 뿌리",
    disabled: true
  },
  I087: {
    type: "stats",
    color: "darkred",
    stats_points: 8,
    label: "Tea Leaves",
    k_label: "마더트리 차"
  },
  I080: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      agi: 5000
    },
    label: "Waterstone Dirk",
    k_label: "세계수의 나뭇가지"
  },
  I081: {
    type: "accessory",
    color: "orange",
    stats: {
      str: 1700,
      agi: 1700,
      int: 1700,
      recovery: 700,
      recovery_duration: 5,
      recovery_multiplier: 2
    },
    label: "Essence of Life",
    k_label: "생명의 가호"
  },
  I0AQ: {
    type: "material",
    color: "black",
    label: "God Essence",
    k_label: "신의 금속"
  },
  I0A6: {
    type: "chest",
    color: "red",
    label: "Archangel’s Assistance",
    k_label: "대천사의 보구함",
    effects: [
      "Drops an artifact or auxiliary Myth item + Archangel Treasure Piece"
    ],
    k_effects: ["대천사의 신화급 보구를 획득합니다"]
  },
  I0BU: {
    type: "chest",
    color: "red",
    label: "Archangel’s Trinket",
    k_label: "대천사의 악세서리함",
    effects: [
      "Drops an artifact or auxiliary Myth item + Archangel Treasure Piece"
    ],
    k_effects: ["대천사의 신화급 보조템을 획득합니다"]
  },
  I0AB: {
    type: "chest",
    color: "red",
    label: "Archangel Treasure Chest",
    k_label: "대천사의 보물함",
    effects: ["Requires at least 3500 base stats for drop"],
    k_effects: ["드랍하려면 최소한 3500의 스탯이 필요하다."]
  },
  I0AC: {
    type: "material",
    color: "black",
    label: "Archangel’s Mark (Old)",
    k_label: "(구)대천사의 증표"
  },
  I0FB: {
    type: "material",
    color: "black",
    label: "Archangel’s Sourcewell",
    k_label: "대천사의 힘의 근원"
  },
  I04Z: {
    type: "material",
    color: "black",
    label: "Archangel Treasure Piece",
    k_label: "대천사의 보물조각"
  },
  I0AD: {
    type: "stats",
    color: "darkred",
    label: "Archangel Essence",
    k_label: "대천사의 에너지",
    effects: ["Requires at least 3500 base stats for drop"],
    k_effects: ["드랍하려면 최소한 3500의 스탯이 필요하다."],
    stats_points: 17
  },
  I0A3: {
    type: "auxiliary",
    color: "red",
    stats: {
      str: 700,
      agi: 700,
      int: 700,
      mp: 8500
    },
    label: "Mana Rune",
    k_label: "대천사의 마나룬"
  },
  I09Z: {
    type: "auxiliary",
    color: "red",
    stats: {
      str: 700,
      agi: 700,
      int: 700
    },
    label: "Archangel’s Mana Potion",
    k_label: "대천사의 마나포션",
    effects: ["On Use: Restore 35% of maximum mana (30s cd)"],
    k_effects: ["사용시 최대마나 35%회복 (쿨타임 30초)"]
  },
  I03C: {
    type: "auxiliary",
    color: "red",
    stats: {
      str: 700,
      agi: 700,
      int: 700
    },
    label: "Archangel’s Potion",
    k_label: "대천사의 포션",
    effects: ["On Use: Restore 30% of health (30s cd)"],
    k_effects: ["사용시 최대생명력 30%회복 (쿨타임 30초)"]
  },
  I0A2: {
    type: "auxiliary",
    color: "red",
    stats: {
      str: 700,
      agi: 700,
      int: 700,
      hp: 15000
    },
    label: "Life Rune",
    k_label: "대천사의 생명룬"
  },
  I0A1: {
    type: "auxiliary",
    color: "red",
    stats: {
      str: 700,
      agi: 700,
      int: 700,
      movement_speed: 90,
      attack_speed: 50
    },
    label: "Archangel’s Ascent",
    k_label: "대천사의 순풍룬"
  },
  I0A0: {
    type: "auxiliary",
    color: "red",
    stats: {
      str: 700,
      agi: 700,
      int: 700,
      damage_increase: 13
    },
    label: "Magic Rune",
    k_label: "대천사의 일격룬"
  },
  I0BP: {
    type: "artifact",
    color: "red",
    stats: {
      str: 2800,
      agi: 2800,
      int: 2800,
      damage_increase: 22
    },
    label: "Dazzling Light Wings",
    k_label: "눈부신 빛의 날개",
    effects: ["Enemies within range take 22% Additional Damage"],
    k_effects: ["범위내 적들 추가데미지 22% 오라"]
  },
  I0BR: {
    type: "artifact",
    color: "red",
    stats: {
      str: 2800,
      agi: 2800,
      int: 2800,
      hp: 20000
    },
    label: "Wings of Valor",
    k_label: "대천사 장의 날개",
    effects: [
      "When HP is below 40%, any damage taken will restore 30% of MAX HP",
      "On use restore 16% of MAX HP every second for 10 seconds (120s cd)"
    ],
    k_effects: [
      "생명력이 40%이하일때 즉사가 아닌 공격을받을면",
      "즉시 생명력 30%를 회복하며 10초간 초당 생명력 16% 회복 (쿨타임 120초)"
    ]
  },
  I0BQ: {
    type: "artifact",
    color: "red",
    stats: {
      str: 2800,
      agi: 2800,
      int: 2800,
      attack_speed: 160,
      movement_speed: 150
    },
    label: "Archangel’s Boots",
    k_label: "대천사의 각반",
    effects: ["On Use: Dash forward (6s cd)"],
    k_effects: ["사용시 전방으로 대쉬(쿨타임6초)"]
  },
  I0BS: {
    type: "artifact",
    color: "red",
    stats: {
      str: 2800,
      agi: 2800,
      int: 2800,
      armor: 700,
      hp: 25000,
      shield: 33000
    },
    label: "Archangel’s Barrier",
    k_label: "대천사의 방벽"
  },
  I0BT: {
    type: "artifact",
    color: "red",
    stats: {
      str: 2800,
      agi: 2800,
      int: 2800,
      damage_increase: 45
    },
    label: "Wings of Justice",
    k_label: "정의의 날개"
  },
  I09D: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      str: 5000,
      agi: 5000,
      int: 5000
    },
    label: "Excalibur",
    k_label: "대천사의 검",
    effects: [
      "On Use: Fires a laser in chosen direction (Deals 300000 + (STR + AGI + INT) x200)(120s cd)"
    ],
    k_effects: [
      "사용시 정의의 일격 시전 (300000 + (STR + AGI + INT) x200)(쿨타임 120초)"
    ]
  },
  I093: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      agi: 6500,
      attack_speed: 200,
      attack_agi: true,
      attack_real: 41
    },
    label: "The Archangel’s Dagger",
    k_label: "대천사의 단검"
  },
  I08Z: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      agi: 6500,
      damage_increase: 55
    },
    label: "The Archangel’s Blade",
    k_label: "대천사의 도검"
  },
  I0A4: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      int: 6500,
      mp: 25000,
      contract: 0.0000042,
      int_tick: true
    },
    label: "Niflheim",
    k_label: "대천사의 마력 지팡이"
  },
  I09W: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      str: 6500,
      hp: 50000
    },
    label: "Angelic Sword of Life",
    k_label: "대천사의 생명검",
    effects: [
      "Every 10 attacks will recover STR x5 HP (9s cd)",
      "Every 6 spells will recover STR x5 HP (10s cd)",
      "On Use: Restores STR x7 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (STR x5)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (STR x5)(쿨타임 10초)",
      "사용시  생명력회복 (STR x7)(쿨타임 120초)"
    ]
  },
  I09Y: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      agi: 6500,
      hp: 50000
    },
    label: "Angelic Bow of Life",
    k_label: "대천사의 생명의활",
    effects: [
      "Every 10 attacks will recover AGI x5 HP (9s cd)",
      "Every 6 spells will recover AGI x5 HP (10s cd)",
      "On Use: Restores AGI x7 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (AGI x5)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (AGI x5)(쿨타임 10초)",
      "사용시  생명력회복 (AGI x7)(쿨타임 120초)"
    ]
  },
  I09X: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      int: 6500,
      hp: 50000
    },
    label: "Archangel’s Staff of Life",
    k_label: "대천사의 생명지팡이",
    effects: [
      "Every 4 spells will recover INT x6 HP (10s cd)",
      "On Use: Restore INT x7 HP of all allies within range(80s cd)"
    ],
    k_effects: [
      "스킬사용 4회시 생명력 회복 (INT x6)(쿨타임 10초)",
      "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x7)(쿨타임 80초)"
    ]
  },
  I099: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      str: 5500,
      agi: 5500,
      attack_str_agi: true,
      attack_real: 11
    },
    label: "The Archangel’s Sword",
    k_label: "대천사의 소검",
    effects: [
      "On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x90 damage (80s cd)"
    ],
    k_effects: [
      "사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x90)(쿨타임 80초)"
    ]
  },
  I09P: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      str: 5500,
      int: 5500,
      int_tick: true,
      attack_str_int_real: 38.4
    },
    label: "Archangel’s Battle Staff",
    k_label: "대천사의 전투지팡이"
  },
  I09L: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      int: 6500,
      attack_int_real: 96,
      int_tick: true
    },
    label: "The Archangel’s Staff",
    k_label: "대천사의 지팡이"
  },
  I09H: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      str: 6500
    },
    label: "The Archangel’s Glaive",
    k_label: "대천사의 창",
    effects: [
      "On Use: Causes an explosion, dealing 400000 + STR x200 damage (45s cd)"
    ],
    k_effects: ["사용시 용기의 폭발 시전 (400000 + STR x200)(쿨타임 45초)"]
  },
  I0A5: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      int: 6500
    },
    label: "Blessed Staff",
    k_label: "대천사장의 지팡이",
    effects: [
      "Summons a high-ranking angel, inflicting (INT x 20) damage per hit"
    ],
    k_effects: [
      "사용시 고위천사를 소환하며, 매 타격마다 (지능 x 20)의 피해를 입힙니다."
    ]
  },
  I0AS: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      int: 6500,
      damage_increase: 27
    },
    label: "Archangel’s Light Staff",
    k_label: "대천사의 빛의 지팡이",
    effects: ["Increases nearby allies damage by 27%"],
    k_effects: ["주변아군 추가데미지 27%증가 오라 생성"]
  },
  I0C5: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      int: 6500,
      damage_increase: 55
    },
    label: "Archangel’s Amber Staff",
    k_label: "대천사의 증폭 지팡이"
  },
  I0C9: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      agi: 6500,
      damage_taken: 25,
      damage_increase: 75
    },
    label: "Archangel’s Gauntlets",
    k_label: "대천사의 건들릿"
  },
  I0CF: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      str: 6500,
      attack_speed: 160,
      attack_str: true,
      attack_real: 40
    },
    label: "Archangel’s Judgement",
    k_label: "대천사의 심판"
  },
  I0D3: {
    type: "auxiliary",
    color: "blue",
    stats: {
      str: 400,
      agi: 400,
      int: 400
    },
    label: "Warrior’s Vitality Potion",
    k_label: "마계의 포션",
    effects: ["On use, restore 30% of maximum hp (45s cd)"],
    k_effects: ["사용시 최대생명력 30%회복 (쿨타임 45초)"]
  },
  I0D0: {
    type: "auxiliary",
    color: "blue",
    stats: {
      str: 400,
      agi: 400,
      int: 400,
      hp: 9000
    },
    label: "Sigil of Life",
    k_label: "생명룬"
  },
  I0D2: {
    type: "auxiliary",
    color: "blue",
    stats: {
      str: 400,
      agi: 400,
      int: 400,
      damage_increase: 8
    },
    label: "Sigil of Magic",
    k_label: "일격룬"
  },
  I0D8: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      agi: 3500
    },
    label: "Dagger of the Shadow Spirit",
    k_label: "검은 영혼의 단검",
    effects: [
      "Consumes 0.8% of maximum HP for each attack and deals an additional 16000 + AGI x16 damage (Only activates when HP is above 1%)"
    ],
    k_effects: [
      "기본공격시 최대체력 0.8%소모(체력 1%이상일때 작동) 매공격시 어둠의 일격을 가합니다 (16000 + AGI x16)"
    ]
  },
  I0D6: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      str: 3500,
      flame_weapon: 10
    },
    label: "Hellfire Great Sword",
    k_label: "지옥불 대검",
    effects: [
      "On use: consume 2% of Maximum HP and deals 50000 + STR x20 damage to nearby enemies every second for 30 seconds"
    ],
    k_effects: [
      "사용시 30초동안 초당 체력을 2%소모하여 주변에 강력한 데미지를 가합니다 (50000 + STR x20)(쿨타임 80초)"
    ]
  },
  I0CR: {
    type: "material",
    color: "black",
    label: "Crystallized Fossil",
    k_label: "염화석",
    disabled: true
  },
  I0D9: {
    type: "artifact",
    color: "blue",
    stats: {
      str: 2000,
      agi: 2000,
      int: 2000,
      damage_increase: 25
    },
    label: "Blood Stone",
    k_label: "마신의 결정",
    effects: [
      "On use: adds the following effects for 20s (180s cd)",
      "40% magic resistance",
      "40% bonus damage",
      "Cannot remove item for 20s"
    ],
    k_effects: [
      "사용시 20초간 마신의 힘 사용 (쿨타임 180초)",
      "추가데미지 40%",
      "마법방어력 40% 추가",
      "20초간 아이템을 벗을수없음"
    ]
  },
  I0D7: {
    type: "武器",
    color: "orange",
    stats: {
      atk: 100000,
      int: 3500,
      damage_increase: 40,
      hp_consume: true
    },
    label: "Shadow Contract",
    k_label: "어둠의 계약"
  },
  I0CZ: {
    type: "auxiliary",
    color: "blue",
    stats: {
      str: 400,
      agi: 400,
      int: 400
    },
    label: "Magician’s Mana Potion",
    k_label: "마계의 마나포션",
    effects: ["On use, restore 35% of maximum mana (45s cd)"],
    k_effects: ["사용시 최대마나 35%회복 (쿨타임 45초)"]
  },
  I0CY: {
    type: "auxiliary",
    color: "blue",
    stats: {
      str: 400,
      agi: 400,
      int: 400,
      mp: 5000
    },
    label: "Sigil of Mana",
    k_label: "마나룬"
  },
  I0D1: {
    type: "auxiliary",
    color: "blue",
    stats: {
      str: 400,
      agi: 400,
      int: 400,
      movement_speed: 50,
      attack_speed: 20
    },
    label: "Sigil of Ferocity",
    k_label: "순풍룬"
  },
  I033: {
    type: "material",
    color: "black",
    label: "Agony",
    k_label: "비명석",
    disabled: true
  },
  I0DB: {
    type: "accessory",
    color: "blue",
    stats: {
      str: 2500,
      agi: 2500,
      int: 2500
    },
    label: "Jewel of Chaos",
    k_label: "혼돈의 보석",
    effects: [
      "On Use: one of three effects will be used :",
      "150% Bonus Damage for 15 seconds",
      "Increase magical defense by 100% and armor by 10000 for 15 seconds",
      "Cannot use magic for 10 seconds (120s cd)"
    ],
    k_effects: [
      "사용시 3가지중 랜덤효과 발동",
      "15초동안 추가데미지 150%증가",
      "15초동안 마법방어력 100%/방어력 10000증가",
      "10초간 마법사용 불가능 (쿨타임 120초)"
    ]
  },
  I036: {
    type: "stats",
    color: "darkred",
    label: "Soul Fragments",
    k_label: "대악마의 정기",
    effects: ["Requires at least 4100 base stats for devil drop"],
    k_effects: ["드랍하려면 최소한 4100의 스탯이 필요하다."],
    stats_points: 18
  },
  I037: {
    type: "chest",
    color: "black",
    label: "Black Soul Stone",
    k_label: "검은 영혼석",
    effects: ["Requires at least 4100 base stats for devil drop"],
    k_effects: ["드랍하려면 최소한 4100의 스탯이 필요하다."]
  },
  I035: {
    type: "chest",
    color: "black",
    label: "Devil of Agony’s Treasure Chest",
    k_label: "대악마의 보물함",
    effects: ["Drops an accessory or helmet Myth item"],
    k_effects: ["대악마의 신화급 악세서리와 투구를 획득합니다"]
  },
  I0DS: {
    type: "chest",
    color: "black",
    label: "Remnants of the Archdemon",
    k_label: "대악마의 잔재",
    effects: ["Drops an armor Mythic item"],
    k_effects: ["대악마의 신화급 방어구를 획득합니다"]
  },
  I0DT: {
    type: "material",
    color: "black",
    label: "The Devil’s Soul Scripture",
    k_label: "대악마의 영혼조각"
  },
  I0DR: {
    type: "accessory",
    color: "red",
    stats: {
      str: 3500,
      agi: 3500,
      int: 3500,
      hp: 40000,
      mp: 25000,
      movement_speed: 200,
      hp_regen: 2000
    },
    label: "Devil’s Shadow Jewel",
    k_label: "대악마의 검은보석"
  },
  I0DP: {
    type: "accessory",
    color: "red",
    stats: {
      int: 4600,
      mp: 50000
    },
    label: "Devil’s Soulstone",
    k_label: "대악마의 대마력",
    effects: ["Recover 50% of maximum MP every 28 seconds"],
    k_effects: ["28초마다 최대마나 50%회복"]
  },
  I0DO: {
    type: "accessory",
    color: "red",
    stats: {
      str: 4600,
      hp: 50000
    },
    label: "Heart of the Devil",
    k_label: "대악마의 심장",
    effects: ["Recover 50% of maximum HP every 28 seconds"],
    k_effects: ["28초마다 최대체력 50%회복"]
  },
  I0DN: {
    type: "accessory",
    color: "red",
    stats: {
      str: 3500,
      agi: 3500,
      int: 3500,
      damage_increase: 30
    },
    label: "Archdemon’s Soul Ring",
    k_label: "대악마의 영혼 반지",
    effects: ["On Use: Provides 80% bonus damage for 15 seconds (120s cd)"],
    k_effects: ["사용시 15초간 추가데미지 80%증가 (쿨타임 120초)"]
  },
  I0DQ: {
    type: "accessory",
    color: "red",
    stats: {
      str: 3500,
      agi: 3500,
      int: 3500,
      damage_increase: 50
    },
    label: "Ferocity’s Soul Ring",
    k_label: "대악마의 일격의 반지"
  },
  I0DM: {
    type: "armor",
    color: "red",
    stats: {
      armor: 900,
      int: 4600,
      mp: 35000,
      mps: 45
    },
    label: "Corrupted Mana Robes",
    k_label: "대악마의 검은 마력로브"
  },
  I0DK: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1200,
      str: 4600,
      hp: 30000,
      hp_regen: -1500,
      flame_armor: 45
    },
    label: "Malevolent Flame Armor",
    k_label: "대악마의 검은불꽃 갑옷"
  },
  I0DJ: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1000,
      str: 3800,
      agi: 3800,
      int: 3800,
      hp: 30000,
      max_health: 27
    },
    label: "Arch Demon’s Life Armor",
    k_label: "대악마의 생명의 갑옷"
  },
  I0DE: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1200,
      str: 4600,
      hp: 30000,
      movement_speed: 200,
      damage_increase: 40
    },
    label: "Demonic Soul Armor",
    k_label: "대악마의 암광 갑옷"
  },
  I0DF: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1100,
      agi: 4600,
      hp: 30000,
      movement_speed: 200,
      damage_increase: 40
    },
    label: "Demonic Amber Vest",
    k_label: "대악마의 암광 경갑옷"
  },
  I0DD: {
    type: "armor",
    color: "red",
    stats: {
      armor: 900,
      int: 4600,
      hp: 30000,
      movement_speed: 200,
      damage_increase: 40
    },
    label: "Demonic Amber Robe",
    k_label: "대악마의 암광 로브"
  },
  I0DC: {
    type: "armor",
    color: "red",
    label: "Regenerative Malevolent Armor",
    stats: {
      armor: 1000,
      str: 3800,
      agi: 3800,
      int: 3800,
      hp: 30000,
      hp_regen_percent: 2.7
    },
    k_label: "대악마의 재생의 갑옷"
  },
  I0DL: {
    type: "armor",
    color: "red",
    stats: {
      armor: 900,
      int: 4600,
      damage_taken: 12,
      damage_increase: 65
    },
    label: "Malevolent Flame Robes",
    k_label: "대악마의 증폭 로브"
  },
  I0DG: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1200,
      str: 4600,
      hp: 35000,
      damage_taken: -24
    },
    label: "Exalted Soul Armor",
    k_label: "대악마의 표피 갑옷"
  },
  I0DH: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1100,
      agi: 4600,
      hp: 35000,
      damage_taken: -24
    },
    label: "Exalted Soul Vest",
    k_label: "대악마의 표피 경갑옷"
  },
  I0DI: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1000,
      int: 4600,
      hp: 35000,
      damage_taken: -24
    },
    label: "Exalted Soul Robes",
    k_label: "대악마의 표피 로브"
  },
  I0CT: {
    type: "helmet",
    color: "blue",
    stats: {
      armor: 700,
      str: 1300,
      agi: 1300,
      int: 1300,
      damage_taken: -13
    },
    label: "Helmet of the Red Magus",
    k_label: "붉은 마기의 투구"
  },
  I0CU: {
    type: "helmet",
    color: "blue",
    stats: {
      armor: 700,
      str: 1300,
      agi: 1300,
      int: 1300
    },
    label: "Hades Helm",
    k_label: "붉은 마력의 투구",
    effects: ["On Use: Grants an anti magic shield for 10 seconds (140s cd)"],
    k_effects: ["사용시 10초간 마법면역 (쿨타임 140초)"]
  },
  I0CV: {
    type: "helmet",
    color: "blue",
    stats: {
      armor: 500,
      mp: 15000,
      int: 2000
    },
    label: "Forbidden Wisdom",
    k_label: "금지된 지혜",
    effects: ["On Use: Restore 80% of Maximum MP (120s cd)"],
    k_effects: ["사용시 MP80% 회복 (쿨타임 120초)"]
  },
  I0CW: {
    type: "helmet",
    color: "blue",
    stats: {
      armor: 500,
      str: 1300,
      agi: 1300,
      int: 1300,
      damage_increase: 50,
      damage_taken: 17
    },
    label: "Arch Demon’s Horn",
    k_label: "최상위 악마의뿔"
  },
  I0CX: {
    type: "helmet",
    color: "blue",
    stats: {
      armor: 700,
      str: 1300,
      agi: 1300,
      int: 1300,
      damage_increase: 28
    },
    label: "Helmet of Surging Flame",
    k_label: "불타는 기운의 투구"
  },
  I038: {
    type: "helmet",
    color: "red",
    stats: {
      armor: 600,
      mp: 20000,
      int: 2500
    },
    label: "Otherworldly Insight",
    k_label: "대악마의 두뇌",
    effects: ["Recover 100% of maximum MP on use (120s cd)"],
    k_effects: ["사용시 MP100% 회복 (쿨타임 120초)"]
  },
  I039: {
    type: "武器",
    color: "blue",
    stats: {
      str: 5000,
      atk: 160000,
      flame_weapon: 14
    },
    label: "Darkfire Greatsword",
    k_label: "검은 지옥불대검",
    effects: [
      "On use: consume 2% of Maximum HP and deals 60000 + STR x25 damage to nearby enemies every second for 30 seconds (80s cd)"
    ],
    k_effects: [
      "사용시 30초동안 초당 체력을 2%소모하여 주변에 강력한 데미지를 가합니다 (60000 + STR x25)(쿨타임 80초)"
    ]
  },
  I047: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      int: 5000,
      damage_increase: 85,
      hp_consume: true
    },
    label: "Soul Contract",
    k_label: "검은 어둠의 계약"
  },
  I04F: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      agi: 5000
    },
    label: "Dagger of the Malevolent Devil",
    k_label: "칠흑의 영혼의 단검",
    effects: [
      "Consumes 0.8% of maximum HP for each attack and deals an additional 16000 + AGI x20 damage (Only activates when HP is above 1%)"
    ],
    k_effects: [
      "기본공격시 최대체력 0.8%소모 (체력 1%이상일때 작동) 매공격시 어둠의 일격을 가합니다 (16000 + AGI x20)"
    ]
  },
  I04T: {
    type: "helmet",
    color: "red",
    stats: {
      armor: 800,
      str: 2000,
      agi: 2000,
      int: 2000,
      damage_increase: 39
    },
    label: "Great Devil’s Shadow",
    k_label: "대악마의 어둠"
  },
  I04G: {
    type: "helmet",
    color: "red",
    stats: {
      armor: 800,
      str: 2000,
      agi: 2000,
      int: 2000,
      damage_taken: -17
    },
    label: "Great Devil’s Skull",
    k_label: "대악마의 두개골"
  },
  I0DW: {
    type: "helmet",
    color: "red",
    stats: {
      armor: 800,
      str: 2000,
      agi: 2000,
      int: 2000
    },
    label: "Great Devil’s Helmet",
    k_label: "대악마의 마력 투구",
    effects: ["Anti magic shield for 10 seconds(110s cd)"],
    k_effects: ["사용시 10초간 마법면역(쿨타임 110초)"]
  },
  I0DX: {
    type: "helmet",
    color: "red",
    stats: {
      armor: 800,
      str: 2000,
      agi: 2000,
      int: 2000,
      damage_increase: 65,
      damage_taken: 20
    },
    label: "Great Devil’s Horn",
    k_label: "대악마의 뿔"
  },
  I0DY: {
    type: "material",
    color: "black",
    label: "Boundless Twilight (Old)",
    k_label: "(구)끝없는 어둠"
  },
  I00R: {
    type: "material",
    color: "black",
    label: "Boundless Twilight",
    k_label: "끝없는 어둠"
  },
  I0DZ: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1000,
      int: 5500,
      mp: 40000,
      mps: 52
    },
    label: "Chaotic Blight Robes",
    k_label: "대혼돈의 마력로브"
  },
  I0E0: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1300,
      str: 5500,
      hp: 35000,
      hp_regen: -2000,
      flame_armor: 55
    },
    label: "Chaotic Infernal Armor",
    k_label: "대혼돈의 불꽃 갑옷"
  },
  I0E1: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1000,
      str: 4400,
      agi: 4400,
      int: 4400,
      hp: 40000,
      max_health: 30
    },
    label: "Chaotic Vigor Armor",
    k_label: "대혼돈의 생명의 갑옷"
  },
  I0E2: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1300,
      str: 5500,
      hp: 35000,
      movement_speed: 200,
      damage_increase: 45
    },
    label: "Chaotic Bright Armor",
    k_label: "대혼돈의 빛의 갑옷"
  },
  I0E3: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1200,
      agi: 5500,
      hp: 35000,
      movement_speed: 200,
      damage_increase: 45
    },
    label: "Chaotic Bright Greaves",
    k_label: "대혼돈의 빛의 경갑"
  },
  I0E4: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1000,
      int: 5500,
      hp: 35000,
      movement_speed: 200,
      damage_increase: 45
    },
    label: "Chaotic Bright Robes",
    k_label: "대혼돈의 빛의 로브"
  },
  I0E5: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1100,
      str: 4400,
      agi: 4400,
      int: 4400,
      hp: 40000,
      hp_regen_percent: 3
    },
    label: "Chaotic Armor of Rejuvenation",
    k_label: "대혼돈의 치유의 갑옷"
  },
  I0E6: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1000,
      int: 5500,
      damage_taken: 12,
      damage_increase: 75
    },
    label: "Chaotic Amplifying Robes",
    k_label: "대혼돈의 증폭 로브"
  },
  I0E7: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1300,
      str: 5500,
      hp: 40000,
      damage_taken: -27
    },
    label: "Chaotic Guardian Armor",
    k_label: "대혼돈의 수호 갑옷"
  },
  I0E8: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1200,
      agi: 5500,
      hp: 40000,
      damage_taken: -27
    },
    label: "Chaotic Shadow Greaves",
    k_label: "대혼돈의 수호 경갑"
  },
  I0E9: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1100,
      int: 5500,
      hp: 40000,
      damage_taken: -27
    },
    label: "Chaotic Amber Robes",
    k_label: "대혼돈의 수호 로브"
  },
  I0EA: {
    type: "material",
    color: "black",
    label: "Chaotic Rune",
    k_label: "타오르는 비명석",
    disabled: true
  },
  I0EB: {
    type: "accessory",
    color: "red",
    stats: {
      str: 4300,
      agi: 4300,
      int: 4300,
      hp: 45000,
      mp: 30000,
      movement_speed: 200,
      hp_regen: 2000
    },
    label: "Chaos Orb",
    k_label: "대혼돈의 보석"
  },
  I0EC: {
    type: "accessory",
    color: "red",
    stats: {
      int: 5500,
      mp: 55000
    },
    label: "Chaotic Mana Stone",
    k_label: "대혼돈의 마력",
    effects: ["Recover 55% of maximum MP every 28 seconds"],
    k_effects: ["28초마다 최대마나 55%회복"]
  },
  I0ED: {
    type: "accessory",
    color: "red",
    stats: {
      str: 5500,
      hp: 55000
    },
    label: "Chaotic Life Stone",
    k_label: "대혼돈의 생명",
    effects: ["Recover 55% of maximum HP every 28 seconds"],
    k_effects: ["28초마다 최대체력 55%회복"]
  },
  I0EE: {
    type: "accessory",
    color: "red",
    stats: {
      str: 4300,
      agi: 4300,
      int: 4300,
      damage_increase: 35
    },
    label: "Murkey Chaos Ring",
    k_label: "대혼돈의 내면",
    effects: ["On Use: Provides 90% bonus damage for 15 seconds (120s cd)"],
    k_effects: ["사용시 15초간 추가데미지 90%증가(쿨타임 120초)"]
  },
  I0EF: {
    type: "accessory",
    color: "red",
    stats: {
      str: 4300,
      agi: 4300,
      int: 4300,
      damage_increase: 58
    },
    label: "Essence of Chaos",
    k_label: "대혼돈의 힘"
  },
  I0CL: {
    type: "accessory",
    color: "blue",
    page: 2,
    rate: 100,
    stats: {
      int: 3700,
      mp: 40000
    },
    label: "Refined Mana Heart",
    k_label: "정제된 마나 하트",
    effects: ["Recover 40% of MAX MP every 28 seconds"],
    k_effects: ["28초마다 최대마나 40%회복"]
  },
  I0EG: {
    type: "auxiliary",
    color: "red",
    stats: {
      str: 1000,
      agi: 1000,
      int: 1000,
      mp: 12000
    },
    label: "Chaotic Mana Rune",
    k_label: "대혼돈의 마나룬"
  },
  I0EH: {
    type: "auxiliary",
    color: "red",
    stats: {
      str: 1000,
      agi: 1000,
      int: 1000
    },
    label: "Chaotic Mana Potion",
    k_label: "대혼돈의 마나포션",
    effects: ["On Use: Restore 35% of maximum mana (25s cd)"],
    k_effects: ["사용시 최대마나 35%회복 (쿨타임 25초)"]
  },
  I0EL: {
    type: "auxiliary",
    color: "red",
    stats: {
      str: 1000,
      agi: 1000,
      int: 1000
    },
    label: "Chaotic Potion",
    k_label: "대혼돈의 포션",
    effects: ["On Use: Restore 30% of health (25s cd)"],
    k_effects: ["사용시 최대생명력 30%회복 (쿨타임 25초)"]
  },
  I0EI: {
    type: "auxiliary",
    color: "red",
    stats: {
      str: 1000,
      agi: 1000,
      int: 1000,
      hp: 20000
    },
    label: "Chaotic Life Rune",
    k_label: "대혼돈의 생명룬"
  },
  I0EJ: {
    type: "auxiliary",
    color: "red",
    stats: {
      str: 1000,
      agi: 1000,
      int: 1000,
      movement_speed: 100,
      attack_speed: 80
    },
    label: "Chaotic Ascension Rune",
    k_label: "대혼돈의 순풍룬"
  },
  I0EK: {
    type: "auxiliary",
    color: "red",
    stats: {
      str: 1000,
      agi: 1000,
      int: 1000,
      damage_increase: 18
    },
    label: "Chaotic Magic Rune",
    k_label: "대혼돈의 일격룬"
  },
  I0EQ: {
    type: "helmet",
    color: "red",
    stats: {
      armor: 900,
      str: 2500,
      agi: 2500,
      int: 2500,
      damage_increase: 45
    },
    label: "Helmet of Chaos",
    k_label: "대혼돈의 광체"
  },
  I0EM: {
    type: "helmet",
    color: "red",
    stats: {
      armor: 900,
      str: 2500,
      agi: 2500,
      int: 2500,
      damage_taken: -19
    },
    label: "Chaotic Plated Helmet",
    k_label: "대혼돈의 수호투구"
  },
  I0EO: {
    type: "helmet",
    color: "red",
    stats: {
      armor: 900,
      str: 2500,
      agi: 2500,
      int: 2500
    },
    label: "Runic Chaos Helm",
    k_label: "대혼돈의 이뮨투구",
    effects: ["Anti magic shield for 12 seconds(110s cd)"],
    k_effects: ["사용시 12초간 마법면역 (쿨타임 110초)"]
  },
  I0EP: {
    type: "helmet",
    color: "red",
    stats: {
      armor: 900,
      str: 2500,
      agi: 2500,
      int: 2500,
      damage_increase: 75,
      damage_taken: 22
    },
    label: "Chaotic Demon Horn",
    k_label: "대혼돈의 뿔"
  },
  I0EN: {
    type: "helmet",
    color: "red",
    stats: {
      int: 3200,
      armor: 700,
      mp: 25000
    },
    label: "Chaotic Insight",
    k_label: "대혼돈의 지혜",
    effects: ["On Use: Restore 100% of maximum mana (120s cd)"],
    k_effects: ["사용시 MP100% 회복 (쿨타임 120초)"]
  },
  I0EZ: {
    type: "accessory",
    color: "blue",
    stats: {
      str: 3100,
      agi: 3100,
      int: 3100,
      hp: 15000,
      movement_speed: 150,
      damage_increase: 25
    },
    label: "Rainbow Gem",
    k_label: "일곱빛깔 보석",
    effects: [
      "Increases maximum charge by 50 when equipped by Electromaster",
      "Increases Gather Materials(D) output by 1 when equipped by Potion Maker"
    ],
    k_effects: [
      "일렉트로 마스터가 착용시 최대 전력 50증가",
      "포션메이커가 착용시 재료넣기 증가 재료 1증가"
    ]
  },
  I0F1: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 3800,
      agi: 3800,
      int: 3800,
      angra_dmg: 30
    },
    label: "Angra Mainyu",
    k_label: "앙그라마이뉴"
  },
  I0F3: {
    type: "artifact",
    color: "blue",
    stats: {
      str: 2500,
      agi: 2500,
      int: 2500,
      movement_speed: 150,
      damage_increase: 10
    },
    label: "Barium Boots",
    k_label: "바라늄 부츠",
    effects: [
      "On Use: cloaks the user for 3 seconds (9s cd)",
      "Maximum Movement Speed while cloaked",
      "Attacking in cloaked state will deal (allstats x 20)",
      "Hot Blooded cooldown is reduced by 10 seconds when worn by Assassin",
      "Increases max combo limit by 3 when worn by Fighter"
    ],
    k_effects: [
      "사용시 3초간 은신 (쿨타임 9초)",
      "이동속도 최대",
      "은신 상태에서 기본공격시 올스텟 x 20의 데미지",
      "암살자가 착용시 블러드 히트 쿨타임 10초 감소",
      "격투가가 착용시 최대 콤보 3증가"
    ]
  },
  I0F2: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 3800,
      agi: 3800,
      int: 3800,
      grasp: 5
    },
    label: "Grasp of Vengeance",
    k_label: "불타는 복수의 손아귀"
  },
  I0F9: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 4500,
      agi: 4500,
      int: 4500
    },
    label: "Distilled Tree Sap",
    k_label: "마더트리 엑기스",
    effects: [
      "On Use: Buff for 60 seconds (30s cd)",
      "Restores 1% of HP per second",
      "Increases all attributes by 500",
      "Grants 18% Bonus Damage",
      "Cannot be dropped after use",
      "When used by Priest, stat buff is increased to 800"
    ],
    k_effects: [
      "사용시 사용대상에60초동안버프(쿨타임 30초)",
      "초당 생명력 1%회복",
      "모든스텟 500증가",
      "추가데미지 18% 증가",
      "아이템사용시 60초간 아이템을 벗을수없음",
      "프리스트가 사용시 올스텟 800상승"
    ]
  },
  I0FA: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 4500,
      agi: 4500,
      int: 4500
    },
    label: "Death’s Approach",
    k_label: "다가오는 죽음",
    effects: [
      "Grants a 0.01% chance to land a critical strike (300000 + (AGI + STR + INT) x80)",
      "Every basic attack raises the critical strike chance by 0.01%",
      "Once a critical strike lands, reset the critical strike probability",
      "When equipped by martial artist, Hectopascal Kick gains more ticks and Mortal Strike does more damage",
      "Strengthens Arrow Revolver when worn by Range Master"
    ],
    k_effects: [
      "기본 공격시 0.01%확률로 필살의 일격을 가합니다 (300000 + (AGI + STR + INT) x80)",
      "공격할때마다 확률이 0.01%씩 증가합니다",
      "필살의 일격을 가한후에는 확률 초기화",
      "무도가가 착용시 죽음의일격 강화",
      "레인지 마스터가 착용시 레인지 컴뱃 마스터리 강화"
    ]
  },
  I0FD: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 5000,
      purgatory_damage: 60,
      purgatory_recovery: 10
    },
    label: "Purgatory",
    k_label: "생명과 죽음의 경계"
  },
  I0FE: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 4500,
      agi: 4500,
      int: 4500
    },
    label: "The Will of Fire",
    k_label: "불의 의지",
    effects: [
      "Create an aura with 1050 range",
      "Recovers 0.5% health every second",
      "Recovers 1% mana every second",
      "12% Bonus damage aura",
      "Reduce all damage taken by 8%",
      "Reduce the cooldown of Stage by 10 seconds when worn by Bard"
    ],
    k_effects: [
      "범위 1050의 오라 생성",
      "초당 생명력 0.5% 회복",
      "초당 마나 1%회복",
      "추가데미지 12% 증가",
      "받은 데미지 8% 회복",
      "바드가 사용시 달아오르는 무대 쿨타임 10초 감소"
    ]
  },
  I0FF: {
    type: "artifact",
    color: "blue",
    stats: {
      str: 2500,
      agi: 2500,
      int: 2500,
      damage_increase: 10
    },
    label: "Yata’s Mirror",
    k_label: "야타의 거울",
    effects: [
      "When equipped, each spell cast will accumulate a charge (Max Charges = 50)",
      "On Use: deals 100000 + Charges x Allstats x3 damage to all enemies within 600 units",
      "Reduces the amount of energy required by Regular Hunter to dash by 1",
      "When worn by Greatsword, Sword Swing deals an additional (Allstats x 4) (lies)"
    ],
    k_effects: [
      "스킬사용시 무기에 에너지를 축척함",
      "아이템 사용시 범위 600의 적에게",
      "축적된 100000 + 에너지 x (올스텟 x 3)의 데미지를 줌(최대에너지 50)",
      "이레귤러헌터 대쉬  에너지 필요갯수 1감소",
      "그레이트 소드 착용시 올스텟 x 4 로적용"
    ]
  },
  I0FG: {
    type: "armor",
    color: "blue",
    stats: {
      str: 2700,
      agi: 2700,
      int: 2700,
      armor: 1000,
      hp: 20000,
      vampiric: 26
    },
    label: "Vampiric Armor",
    k_label: "불멸의 갑옷"
  },
  I0FL: {
    type: "武器",
    color: "blue",
    stats: {
      atk: 160000,
      str: 3800,
      agi: 3800,
      int: 3800,
      bamboo_damage: 450
    },
    label: "Bamboo Spear",
    k_label: "죽창"
  },
  I0FM: {
    type: "helmet",
    color: "blue",
    stats: {
      str: 1700,
      agi: 1700,
      int: 1700,
      armor: 900
    },
    label: "Lethal Gaze",
    k_label: "죽음을 응시하는 눈",
    effects: [
      "Each skill used adds 1 stack",
      "When stacks reach 100, deals 200000 + (All Stats x 60)",
      "When worn by Explosion Wizard, enhances Fire Wave",
      "When worn by Overmind, enhances Void"
    ],
    k_effects: [
      "스킬 적중시 죽음스택을 쌓음",
      "100스택일떄 스킬 적중시 죽음의 폭발발생 (올스텟 x 60)",
      "폭렬 마법사가 사용시 파이어웨이브 강화",
      "오버마인드가 사용시 보이드 강화"
    ]
  },
  I0G4: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      str: 6500,
      damage_increase: 55
    },
    label: "Archangel's Great Sword",
    k_label: "대천사의 대검"
  },
  I0G5: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      str: 7000,
      damage_increase: 60
    },
    label: "Archangel's Great Sword +1",
    k_label: "대천사의 대검 +1"
  },
  I0G6: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      str: 7500,
      damage_increase: 65
    },
    label: "Archangel's Great Sword +2",
    k_label: "대천사의 대검 +2"
  },
  I0G7: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      str: 8000,
      damage_increase: 70
    },
    label: "Archangel's Great Sword +3",
    k_label: "대천사의 대검 +3"
  },
  I0G8: {
    type: "armor",
    color: "orange",
    stats: {
      int: 4000,
      armor: 700
    },
    label: "The Sage's Robe",
    k_label: "명인의 로브"
  },
  I0G9: {
    type: "armor",
    color: "blue",
    stats: {
      int: 5100,
      armor: 800
    },
    label: "The Titan's Robe",
    k_label: "지존의 로브"
  },
  I0GA: {
    type: "armor",
    color: "red",
    stats: {
      int: 6900,
      armor: 1000
    },
    label: "The Devil King's Robe",
    k_label: "대악마의 패왕 로브"
  },
  I0GB: {
    type: "armor",
    color: "red",
    stats: {
      int: 8300,
      armor: 1100
    },
    label: 'Chaotic "True"Devil King\'s Robe',
    k_label: '대혼돈의 "진"패왕 로브'
  },
  I0GI: {
    type: "artifact",
    color: "red",
    stats: {
      str: 3500,
      agi: 3500,
      int: 3500,
      damage_increase: 26
    },
    label: "Chaotic Light Wings",
    k_label: "대혼돈의 빛의 날개",
    effects: ["Enemies within range take 26% Additional Damage"],
    k_effects: ["범위내 적들 추가데미지 26% 오라"]
  },
  I0GJ: {
    type: "artifact",
    color: "red",
    stats: {
      str: 3500,
      agi: 3500,
      int: 3500,
      hp: 30000
    },
    label: "Chaotic Life Wings",
    k_label: "대혼돈의 생명의 날개",
    effects: [
      "When HP is below 40%, any damage taken will restore 60% of MAX HP",
      "On use restore 20% of MAX HP every second for 10 seconds (120s cd)"
    ],
    k_effects: [
      "생명력이 40%이하일때 즉사가 아닌 공격을받을면",
      "즉시 생명력 60%를 회복하며 10초간 초당 생명력 20% 회복 (쿨타임 120초)"
    ]
  },
  I0GK: {
    type: "artifact",
    color: "red",
    stats: {
      str: 3500,
      agi: 3500,
      int: 3500,
      attack_speed: 200,
      movement_speed: 200
    },
    label: "Chaotic Boots",
    k_label: "대혼돈의 각반",
    effects: ["On Use: Dash forward (4.5s cd)"],
    k_effects: ["사용시 전방으로 대쉬(쿨타임4.5초)"]
  },
  I0GL: {
    type: "artifact",
    color: "red",
    stats: {
      str: 3500,
      agi: 3500,
      int: 3500,
      damage_increase: 52
    },
    label: "Chaotic Devil Wings",
    k_label: "대혼돈의 날개"
  },
  I0GM: {
    type: "accessory",
    color: "purple",
    stats: {
      str: 800,
      agi: 800,
      int: 800,
      critical_hit: 1.5,
      critical_hit_chance: 20
    },
    label: "Assassination Ring",
    k_label: "암살의 반지"
  },
  I0GN: {
    type: "accessory",
    color: "purple",
    stats: {
      str: 1100,
      agi: 1100,
      int: 1100,
      critical_hit: 2,
      critical_hit_chance: 20
    },
    label: "Ring of Blazing Death",
    k_label: "타오르는 죽음의 반지"
  },
  I0GO: {
    type: "accessory",
    color: "orange",
    stats: {
      str: 1700,
      agi: 1700,
      int: 1700,
      critical_hit: 2.5,
      critical_hit_chance: 20
    },
    label: "Amethyst Ring",
    k_label: "자수정 반지"
  },
  I0GP: {
    type: "accessory",
    color: "blue",
    stats: {
      str: 2500,
      agi: 2500,
      int: 2500,
      critical_hit: 3,
      critical_hit_chance: 20
    },
    label: "Amethyst Gem",
    k_label: "교언의 자수정"
  },
  I0GQ: {
    type: "accessory",
    color: "red",
    stats: {
      str: 3500,
      agi: 3500,
      int: 3500,
      critical_hit: 3.5,
      critical_hit_chance: 25
    },
    label: "Death Demon Gem",
    k_label: "대악마의 죽음을 보는보석"
  },
  I0GR: {
    type: "accessory",
    color: "red",
    stats: {
      str: 4300,
      agi: 4300,
      int: 4300,
      critical_hit: 4,
      critical_hit_chance: 25
    },
    label: "Great Chaos Gem",
    k_label: "대혼돈의 죽음을 보는보석"
  },
  I0HA: {
    type: "chest",
    color: "black",
    label: "Sealed God of Destruction",
    k_label: "봉인된 파멸의 신",
    effects: ["Requires at least 11000 base stats for devil drop"],
    k_effects: ["드랍하려면 최소한 11000의 스탯이 필요하다."]
  },
  I0HB: {
    color: "black",
    type: "material",
    label: "Power of destruction",
    k_label: "파멸의 권능"
  },
  I0HC: {
    color: "black",
    type: "material",
    label: "Black God Energy",
    k_label: "검은 신의 에너지"
  },
  I0HD: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      agi: 11000,
      attack_speed: 300,
      attack_agi: true,
      attack_real: 76
    },
    label: "Sealed God Dagger",
    k_label: "신의 단검"
  },
  I0HE: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      agi: 11000,
      damage_increase: 180,
      damage_taken: 45
    },
    label: "Sealed God Gauntlets",
    k_label: "신의 건들릿"
  },
  I0HG: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      agi: 11000,
      damage_increase: 90
    },
    label: "Sealed God Blade",
    k_label: "신의 도검",
    effects: ["Deals damage proportional to stats when used (120s cd)"],
    k_effects: ["사용시 신의 일격 시전 (쿨타임 120초)(능력치 비례)"]
  },
  I0GS: {
    type: "material",
    color: "black",
    label: "Luck Token",
    k_label: "행운의 증표",
    effects: ["Can be obtained by selling a char item"],
    k_effects: ["캐릭터 상품을 판매하여 얻을 수 있습니다"]
  },
  I0HF: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      str: 8500,
      agi: 8500,
      int: 8500
    },
    label: "Sealed God Longsword",
    k_label: "신의 장검",
    effects: ["Deals 420000 + All Stats * 350 when used (120s cd)"],
    k_effects: [
      "사용시 신의 일격 시전 (쿨타임 120초)(420000 + 모든 통계 * 350)"
    ]
  },
  I0HH: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      int: 11000,
      mp: 45000,
      contract: 0.0000056,
      int_tick: true
    },
    label: "God's Magic Staff",
    k_label: "신의 마력 지팡이"
  },
  I0HI: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      int: 11000
    },
    label: "Staff of Destruction",
    k_label: "파멸의 지팡이",
    effects: ["45% damage increase to nearby allies"],
    k_effects: ["주변아군 추가데미지 45%증가 오라 생성"]
  },
  I0HJ: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      str: 11000,
      hp: 125000
    },
    label: "God's Sword of Life",
    k_label: "신의 생명의검",
    effects: [
      "Every 10 attacks will recover STR x6.7 HP (9s cd)",
      "Every 6 spells will recover STR x6.7 HP (10s cd)",
      "On Use: Restores STR x6.7 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (STR x6.7)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (STR x6.7)(쿨타임 10초)",
      "사용시  생명력회복 (STR x6.7)(쿨타임 120초)"
    ]
  },
  I0HK: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      agi: 11000,
      hp: 125000
    },
    label: "God's Bow of Life",
    k_label: "생명의 신궁",
    effects: [
      "Every 10 attacks will recover AGI x6.7 HP (9s cd)",
      "Every 6 spells will recover AGI x6.7 HP (10s cd)",
      "On Use: Restores AGI x6.7 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (AGI x6.7)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (AGI x6.7)(쿨타임 10초)",
      "사용시  생명력회복 (AGI x6.7)(쿨타임 120초)"
    ]
  },
  I0G3: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      int: 11000,
      hp: 125000
    },
    label: "God's Staff of Life",
    k_label: "신의 생명 지팡이",
    effects: [
      "Every 4 spells will recover INT x7.5 HP (10s cd)",
      "On Use: Restore INT x10 HP of all allies within range (80s cd)"
    ],
    k_effects: [
      "스킬사용 4회시 생명력 회복 (INT x7.5)(쿨타임 10초)",
      "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x10)(쿨타임 80초)"
    ]
  },
  I0GC: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      str: 9500,
      agi: 9500,
      attack_str_agi: true,
      attack_real: 23
    },
    label: "God's Sword",
    k_label: "신의 소검",
    effects: ["On use: 400000 + (STR + AGI) x180 damage"],
    k_effects: ["사용시 400000 + (STR + AGI) x180 (쿨타임 80초)"]
  },
  I0GD: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      str: 11000,
      attack_speed: 250,
      attack_str: true,
      attack_real: 80
    },
    label: "God's Judgement",
    k_label: "신의 심판"
  },
  I0HL: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      str: 9500,
      int: 9500,
      attack_str_int_real: 72,
      int_tick: true
    },
    label: "God's Staff",
    k_label: "신의 일격 지팡이"
  },
  I0HM: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      int: 11000,
      damage_increase: 90
    },
    label: "God's Amber Staff",
    k_label: "신의 증폭 지팡이"
  },
  I0HN: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      int: 11000,
      int_tick: true,
      attack_int_real: 180
    },
    label: "God's Judgement Staff",
    k_label: "신의 심판 지팡이"
  },
  I0HP: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      int: 11000
    },
    label: "God's Blessed Staff",
    k_label: "신의 권능",
    effects: [
      "Summons an apostle of the shrine, inflicting (INT x 36) damage per hit"
    ],
    k_effects: [
      "사용시 신궁의 사도를 소환하며, 매 타격마다 (지능 x 36)의 피해를 입힙니다"
    ]
  },
  I0HQ: {
    type: "stats",
    color: "darkred",
    stats_points: 14,
    label: "Burning Energy",
    k_label: "불타는 에너지",
    disabled: true
  },
  I0HR: {
    type: "stats",
    color: "darkred",
    stats_points: 14,
    label: "Suffering Energy",
    k_label: "고통의 에니저",
    disabled: true
  },
  I0HT: {
    type: "material",
    color: "black",
    label: "Sealed God's Treasure",
    k_label: "봉인된 신의 보물"
  },
  I0HU: {
    type: "artifact",
    color: "god",
    stats: {
      str: 5000,
      agi: 5000,
      int: 5000,
      damage_increase: 65
    },
    label: "Wings of Destruction",
    k_label: "파멸의 날개"
  },
  I0HV: {
    type: "artifact",
    color: "god",
    stats: {
      str: 5000,
      agi: 5000,
      int: 5000,
      damage_increase: 34
    },
    label: "Light Wings of Destruction",
    k_label: "눈부신 신의 날개",
    effects: ["Enemies within range take 34% Additional Damage"],
    k_effects: ["범위내 적들 추가데미지 34% 오라"]
  },
  I0HW: {
    type: "artifact",
    color: "god",
    stats: {
      str: 5000,
      agi: 5000,
      int: 5000,
      hp: 50000
    },
    label: "Life Wings of Destruction",
    k_label: "신의 생명의 날개",
    effects: [
      "When HP is below 40%, any damage taken will restore 100% of MAX HP",
      "On use restore 20% of MAX HP every second for 10 seconds (120s cd)"
    ],
    k_effects: [
      "생명력이 40%이하일때 즉사가 아닌 공격을받을면",
      "즉시 생명력 100%를 회복하며 10초간 초당 생명력 20% 회복 (쿨타임 120초)"
    ]
  },
  I0HX: {
    type: "artifact",
    color: "god",
    stats: {
      str: 5000,
      agi: 5000,
      int: 5000,
      attack_speed: 300,
      movement_speed: 200
    },
    label: "Boots of Destruction",
    k_label: "신의 각반",
    effects: ["On Use: Dash forward (2.8s cd)"],
    k_effects: ["사용시 전방으로 대쉬(쿨타임2.8초)"]
  },
  I0I2: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      str: 11000,
      damage_increase: 90
    },
    label: "God's GreatSword",
    k_label: "신의 대검"
  },
  I0I3: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 1500,
      agi: 1500,
      int: 1500,
      mp: 18000
    },
    label: "God's Mana Rune",
    k_label: "신의 마나룬"
  },
  I0I4: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 1500,
      agi: 1500,
      int: 1500
    },
    label: "God's Mana Potion",
    k_label: "신의 마나포션",
    effects: ["On Use: Restore 40% of maximum mana (25s cd)"],
    k_effects: ["사용시 최대마나 40%회복 (쿨타임 25초)"]
  },
  I0I5: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 1500,
      agi: 1500,
      int: 1500,
      hp: 30000
    },
    label: "God's Life Rune",
    k_label: "대혼돈의 생명룬"
  },
  I0I6: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 1500,
      agi: 1500,
      int: 1500,
      damage_increase: 25
    },
    label: "God's Magic Rune",
    k_label: "신의 일격룬"
  },
  I0I7: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 1500,
      agi: 1500,
      int: 1500,
      movement_speed: 120,
      attack_speed: 100
    },
    label: "God's Ascension Rune",
    k_label: "신의 순풍룬"
  },
  I0I8: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 1500,
      agi: 1500,
      int: 1500
    },
    label: "God's Potion",
    k_label: "신의 포션",
    effects: ["On Use: Restore 45% of health (25s cd)"],
    k_effects: ["사용시 최대생명력 45%회복 (쿨타임 25초)"]
  },
  I0I9: {
    type: "accessory",
    color: "blue",
    stats: {
      str: 2500,
      agi: 2500,
      int: 2500,
      recovery: 1000,
      recovery_duration: 5,
      recovery_multiplier: 2.5
    },
    label: "Gaia's Essence",
    k_label: "대지의 가호"
  },
  I0IA: {
    type: "artifact",
    color: "red",
    stats: {
      str: 3500,
      agi: 3500,
      int: 3500,
      armor: 800,
      hp: 30000,
      shield: 38000
    },
    label: "Chaotic Barrier",
    k_label: "대혼돈의 방벽"
  },
  I0IB: {
    type: "artifact",
    color: "god",
    stats: {
      str: 5000,
      agi: 5000,
      int: 5000,
      armor: 1000,
      hp: 40000,
      shield: 50000
    },
    label: "God's Barrier",
    k_label: "신의 방벽"
  },
  I0IC: {
    type: "artifact",
    color: "red",
    stats: {
      str: 2800,
      agi: 2800,
      int: 2800,
      attack_speed: 90,
      movement_speed: 30
    },
    label: "Archangel Blue Wings",
    k_label: "대천사의 푸른날개",
    effects: [
      "Allies have 30% movement speed and 90% attack speed increased",
      "Enemies have 20% movement speed and attack speed reduced",
      "Freeze nearby enemies on use, dealing 150000 + (STR + AGI + INT) x95 (180s cd)"
    ],
    k_effects: [
      "주변 적군 공이속 20%감소",
      "주변 아군 공속 90% 이속 30%증가",
      "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x95)(쿨타임 180초)"
    ]
  },
  I0ID: {
    type: "artifact",
    color: "red",
    stats: {
      str: 3500,
      agi: 3500,
      int: 3500,
      attack_speed: 120,
      movement_speed: 35
    },
    label: "Chaotic Blue Wings",
    k_label: "대혼돈의 푸른날개",
    effects: [
      "Allies have 35% movement speed and 120% attack speed increased",
      "Enemies have 25% movement speed and attack speed reduced",
      "Freeze nearby enemies on use, dealing 150000 + (STR + AGI + INT) x110 (180s cd)"
    ],
    k_effects: [
      "주변 적군 공이속 25%감소",
      "주변 아군 공속 120% 이속 35%증가",
      "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x110)(쿨타임 180초)"
    ]
  },
  I0IE: {
    type: "artifact",
    color: "god",
    stats: {
      str: 5000,
      agi: 5000,
      int: 5000,
      attack_speed: 150,
      movement_speed: 40
    },
    label: "God's Blue Wings",
    k_label: "신의 푸른 날개",
    effects: [
      "Allies have 40% movement speed and 150% attack speed increased",
      "Enemies have 25% movement speed and attack speed reduced",
      "Freeze nearby enemies on use, dealing 150000 + (STR + AGI + INT) x130 (180s cd)"
    ],
    k_effects: [
      "주변 적군 공이속 25%감소",
      "주변 아군 공속 150% 이속 40%증가",
      "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x130)(쿨타임 180초)"
    ]
  },
  I0IF: {
    type: "accessory",
    color: "orange",
    stats: {
      int: 1700,
      str: 1700,
      agi: 1700,
      armor: 400,
      movement_speed: 150,
      magic_resistance: 16
    },
    label: "Mother Tree Trunk",
    k_label: "마더트리 기둥"
  },
  I0IG: {
    type: "accessory",
    color: "blue",
    stats: {
      int: 2500,
      str: 2500,
      agi: 2500,
      armor: 500,
      movement_speed: 150,
      magic_resistance: 20
    },
    label: "Mother Tree Roots",
    k_label: "세계수의 뿌리"
  },
  I0IH: {
    type: "accessory",
    color: "red",
    stats: {
      int: 3500,
      str: 3500,
      agi: 3500,
      armor: 700,
      movement_speed: 200,
      magic_resistance: 25
    },
    label: "Demonic Tree Roots",
    k_label: "대악마의 수호"
  },
  I0II: {
    type: "accessory",
    color: "red",
    stats: {
      int: 4300,
      str: 4300,
      agi: 4300,
      armor: 800,
      movement_speed: 200,
      magic_resistance: 27
    },
    label: "Chaotic Tree Roots",
    k_label: "대혼돈의 수호"
  },
  I0IJ: {
    type: "accessory",
    color: "red",
    stats: {
      str: 3500,
      agi: 3500,
      int: 3500,
      recovery: 1500,
      recovery_duration: 5,
      recovery_multiplier: 3.5
    },
    label: "Demonic Essence",
    k_label: "대악마의 가호"
  },
  I0IK: {
    type: "accessory",
    color: "red",
    stats: {
      str: 4300,
      agi: 4300,
      int: 4300,
      recovery: 1800,
      recovery_duration: 5,
      recovery_multiplier: 4
    },
    label: "Chaotic Essence",
    k_label: "대혼돈의 가호"
  },
  I0IL: {
    type: "helmet",
    color: "orange",
    stats: {
      int: 900,
      str: 900,
      agi: 900,
      armor: 700,
      magic_resistance: 10
    },
    label: "Hitchhiker's Helmet",
    k_label: "수호석 투구"
  },
  I0IM: {
    type: "helmet",
    color: "blue",
    stats: {
      int: 1300,
      str: 1300,
      agi: 1300,
      armor: 900,
      magic_resistance: 14
    },
    label: "Resistance Helmet",
    k_label: "힐데그림"
  },
  I0IN: {
    type: "helmet",
    color: "red",
    stats: {
      int: 2000,
      str: 2000,
      agi: 2000,
      armor: 1200,
      magic_resistance: 20
    },
    label: "Demonic Resistance Helmet",
    k_label: "대악마의 저항투구"
  },
  I0IO: {
    type: "helmet",
    color: "red",
    stats: {
      int: 2500,
      str: 2500,
      agi: 2500,
      armor: 1400,
      magic_resistance: 23
    },
    label: "Chaotic Resistance Helmet",
    k_label: "대혼돈의 저항투구"
  },
  I0IP: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      int: 6500,
      damage_increase: 80,
      hp_consume: true
    },
    label: "Archangel Contract",
    k_label: "대천의 계약"
  },
  I0IQ: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      int: 7000,
      damage_increase: 95,
      hp_consume: true
    },
    label: "Archangel Contract +1",
    k_label: "대천의 계약 +1"
  },
  I0IR: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      int: 7500,
      damage_increase: 110,
      hp_consume: true
    },
    label: "Archangel Contract +2",
    k_label: "대천의 계약 +2"
  },
  I0IS: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      int: 8000,
      damage_increase: 135,
      hp_consume: true
    },
    label: "Archangel Contract +3",
    k_label: "대천의 계약 +3"
  },
  I0IX: {
    type: "chest",
    color: "god",
    label: "God's Treasure Chest",
    k_label: "신의 보물함"
  },
  I0J0: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Range Master]",
    k_label: "해방된 힘 [레인지 마스터]",
    effects: ["Enchances Arrow Revolver"],
    k_effects: ["에로우 리볼버를 강화합니다"],
    disabled: true
  },
  I0J1: {
    type: "unleash",
    color: "god",
    label: "Unleash Power of God",
    k_label: "신의 힘으로 능력이 해방됩니다",
    effects: ["Arrow Revolver agility proportional damage increased by 2"],
    k_effects: ["에로우 리볼버의 기본공격 민첩 비례 데미지가 2증가"]
  },
  I0J2: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Psychic]",
    k_label: "해방된 힘 [염동술사]",
    effects: ["Increases energy sphere duration by 15s"],
    k_effects: ["에너지 구체의 지속시간을 15초 증가시킵니다"]
  },
  I0J3: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Sniper]",
    k_label: "해방된 힘 [스나이퍼]",
    effects: ["Explosive Magazines cd reduced by 8s"],
    k_effects: ["폭발성 탄창 쿨타임 8초 감소"]
  },
  I0J4: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Fighter]",
    k_label: "해방된 힘 [격투가]",
    effects: ["Combo's maximum value is increased by 15"],
    k_effects: ["콤보의 최대치가 15 증가합니다"]
  },
  I0J5: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Death Scythe]",
    k_label: "해방된 힘 [데스사이즈]",
    effects: ["Cursed Possession cd reduced by 10s"],
    k_effects: ["오니화 쿨타임 10초감소"]
  },
  I0J6: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Assassin]",
    k_label: "해방된 힘 [암살자]",
    effects: ["Enchances Hot Blooded damage by 20%"],
    k_effects: ["블러드 히트의 데미지 증가율이 20% 추가증가"]
  },
  I0J7: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Shooter]",
    k_label: "해방된 힘 [슈터]",
    effects: ["The maximum number of auxiliary weapons is increased by one"],
    k_effects: ["보조 사출기의 최대 배치 수가 1기 증가합니다"]
  },
  I0J8: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Lancer]",
    k_label: "해방된 힘 [랜서]",
    effects: ["Reduces Javelin cd by 1s"],
    k_effects: ["투창의 쿨타임이 1초 감소합니다"]
  },
  I0J9: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Martial Artist]",
    k_label: "해방된 힘 [무도가]",
    effects: ["Awakening(G) duration increased by 4s"],
    k_effects: ["각성(G)의 지속시간이 4초증가"]
  },
  I0JA: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Electromaster]",
    k_label: "해방된 힘 [일렉트로 마스터]",
    effects: ["Reduces Eye of the Storm cd by 20s"],
    k_effects: ["뇌단의 쿨타임 20초가 감소합니다"]
  },
  I0JB: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Explosion Wizard]",
    k_label: "해방된 힘 [폭렬마법사]",
    effects: ["Increases Ignite ticks by 6"],
    k_effects: ["발화의 공격횟수가 6회 증가합니다"]
  },
  I0JC: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Overmind]",
    k_label: "해방된 힘 [오버마인드]",
    effects: ["Increases Thunder Calling int multiplier by 3%"],
    k_effects: ["초월의 룬의 지능증가폭이 3% 증가합니다"]
  },
  I0JD: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Bard]",
    k_label: "해방된 힘 [바드]",
    effects: ["Reduces cooldown of Stage by 12s", "Not Implemented"],
    k_effects: ["달아오르는 무대의 쿨타임 12초 감소", "작동 안함"]
  },
  I0JE: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Enchanter]",
    k_label: "해방된 힘 [야천의 마도사]",
    effects: ["Reduces Unison cd by 8s"],
    k_effects: ["유니즌 인의 쿨타임이 8초 감소합니다"]
  },
  I0JF: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Potion Maker]",
    k_label: "해방된 힘 [포션메이커]",
    effects: ["Improved Gather Materials"],
    k_effects: ["재료넣기를 강화합니다"]
  },
  I0JG: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Priest]",
    k_label: "해방된 힘 [프리스트]",
    effects: ["Increases Baumkuchen Feeding int multiplier by 1.2%"],
    k_effects: ["바움쿠헨 먹이기 회복지능 계수가 1.2 증가합니다"]
  },
  I0KB: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Specialist]",
    k_label: "가이아 갑옷",
    effects: [
      "Increase the number of magazines for heavy machine gun (W) by 100",
      "Rocket Launcher (E) Increases the number of shots by 20"
    ],
    k_effects: [
      "해비 머신건(W)탄창 갯수 100개증가",
      "로켓런처(E) 탄찬 갯수 20개증가"
    ]
  },
  I0JH: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Blood Lord]",
    k_label: "해방된 힘 [블러드로드]",
    effects: ["Decreases cooldown of Heartspan by 10s"],
    k_effects: ["코코로와타리의 쿨타임 10초감소"]
  },
  I0JI: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Berserker]",
    k_label: "해방된 힘 [버서커]",
    effects: ["Increases Frenzy str multiplier by 1.5%"],
    k_effects: ["폭주의 공격시 스텟비례 데미지가 1.5 증가합니다"]
  },
  I0JJ: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Kamui]",
    k_label: "해방된 힘 [카무이]",
    effects: ["Reduces basic atacks needed to activate Empower by 2"],
    k_effects: ["참격의 패시브공격회수가 2감소합니다"]
  },
  I0JK: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Regular Hunter]",
    k_label: "해방된 힘 [이레귤러 헌터]",
    effects: ["Reduces energy required by Dash by 1"],
    k_effects: ["대쉬의 에너지 사용이 1줄어듭니다. 강화합니다"]
  },
  I0JL: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Great Sword]",
    k_label: "해방된 힘 [그레이트 소드]",
    stats: {
      max_health: 8
    }
  },
  I0D5: {
    type: "unleash",
    color: "god",
    label: "Unleash Force [Demon]",
    k_label: "해방된 힘 [혈귀]",
    effects: ["Explosive force damage increased by 25%"],
    k_effects: ["폭혈 데미지 25% 증가"]
  },
  I0JM: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Crusader]",
    k_label: "해방된 힘 [크루세이더]",
    effects: ["Reduces the cooldown of Light Casts by 15s"],
    k_effects: ["빛의 집속의 쿨타임이 15초 감소합니다", "작동 안함"]
  },
  I0IT: {
    type: "skill",
    color: "god",
    label: "Platelet skill slot 1 swap",
    k_label: "혈소판 가방 1번 슬롯교체",
    effects: ["Slot replacement skill is added"],
    k_effects: ["1번슬롯 교체스킬이 추가됩니다"]
  },
  I0IU: {
    type: "skill",
    color: "god",
    label: "Platelet skill slot 2 swap",
    k_label: "혈소판 가방 2번 슬롯교체",
    effects: ["Slot replacement skill is added"],
    k_effects: ["2번슬롯 교체스킬이 추가됩니다"]
  },
  I0IV: {
    type: "skill",
    color: "god",
    label: "Platelet skill slot 3 swap",
    k_label: "혈소판 가방 3번 슬롯교체",
    effects: ["Slot replacement skill is added"],
    k_effects: ["3번슬롯 교체스킬이 추가됩니다"]
  },
  I0IW: {
    type: "skill",
    color: "god",
    label: "Platelet skill slot 4 swap",
    k_label: "혈소판 가방 4번 슬롯교체",
    effects: ["Slot replacement skill is added"],
    k_effects: ["4번슬롯 교체스킬이 추가됩니다"]
  },
  I0IZ: {
    type: "skill",
    color: "god",
    label: "God's Awakening",
    k_label: "신의 각성",
    effects: [
      "Creates a extra slot where additional equipment powers can be used"
    ],
    k_effects: ["신의 힘으로 추가 장비를 장착할수있는 슬롯생성"]
  },
  I0JN: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Blood Test]",
    k_label: "해방된 힘 [혈검사]",
    effects: ["Increases Shadowmeld duration by 3s"],
    k_effects: ["그림자 숨기의 지속시간이 3초 증가합니다"]
  },
  I0HO: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      str: 11000
    },
    label: "God's Glaive",
    k_label: "신의 창",
    effects: [
      "On Use: Causes an explosion, dealing 700000 + STR x450 damage (38s cd)"
    ],
    k_effects: ["사용시 용기의 폭발 시전 (700000 + STR x450)(쿨타임 38초)"]
  },
  I06L: {
    type: "chest",
    color: "black",
    label: "Spirit of the Celestial Waterstone",
    k_label: "수호석의 구동구"
  },
  I06Y: {
    type: "chest",
    color: "black",
    label: "Spirit of the Gatekeeper Hellgainer",
    k_label: "하급 수료증"
  },
  I05W: {
    type: "chest",
    color: "black",
    label: "The Spirit of the Destroyer",
    k_label: "디스트로이어의 영혼"
  },
  I05X: {
    type: "chest",
    color: "black",
    label: "The Spirit of Insanity",
    k_label: "광기의 영혼"
  },
  I071: {
    type: "chest",
    color: "black",
    label: "Spirit of the Guardian",
    k_label: "가디언의 영혼"
  },
  I072: {
    type: "chest",
    color: "black",
    label: "Spirit of the Treant",
    k_label: "뿌리 깊은 나무"
  },
  I0KM: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1400,
      int: 11000
    },
    label: "Robes of Trust",
    k_label: "투신의 로브"
  },
  I0KN: {
    type: "armor",
    color: "god",
    stats: {
      str: 7000,
      armor: 1600,
      hp: 50000,
      hp_regen: -3000,
      flame_armor: 70
    },
    label: "Purified Flame Armor",
    k_label: "정화의 불꽃 갑옷"
  },
  I0KO: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1200,
      int: 7000,
      mp: 55000,
      mps: 63
    },
    label: "Divine Mana Robes",
    k_label: "신의 마력 로브"
  },
  I0KP: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1600,
      str: 7000,
      hp: 45000,
      movement_speed: 200,
      damage_increase: 60
    },
    label: "Purified Bright Armor",
    k_label: "신의 빛의 갑옷"
  },
  I0KQ: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1500,
      agi: 7000,
      hp: 45000,
      movement_speed: 200,
      damage_increase: 60
    },
    label: "Purified Bright Greaves",
    k_label: "신의 빛의 경갑"
  },
  I0KR: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1200,
      int: 7000,
      hp: 45000,
      movement_speed: 200,
      damage_increase: 60
    },
    label: "Purified Bright Robes",
    k_label: "신의 빛의 로브"
  },
  I0KS: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1200,
      str: 5500,
      agi: 5500,
      int: 5500,
      hp: 50000,
      max_health: 36
    },
    label: "Purified Life Armor",
    k_label: "정화된 생명의 갑옷"
  },
  I0KT: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1600,
      str: 7000,
      hp: 50000,
      damage_taken: -32
    },
    label: "Purified Guardian Armor",
    k_label: "신의 수호 갑옷"
  },
  I0KU: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1500,
      agi: 7000,
      hp: 50000,
      damage_taken: -32
    },
    label: "Purified Guardian Greaves",
    k_label: "신의 수호 경갑"
  },
  I0KV: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1200,
      int: 7000,
      hp: 50000,
      damage_taken: -32
    },
    label: "Purified Guardian Robes",
    k_label: "신의 수호 로브"
  },
  I0KW: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1200,
      str: 5500,
      agi: 5500,
      int: 5500,
      hp: 50000,
      hp_regen_percent: 4
    },
    label: "Purified Healing Armor",
    k_label: "정화된 치유의 갑옷"
  },
  I0KX: {
    type: "chest",
    color: "god",
    label: "Purification God's Treasure Chest",
    k_label: "정화의신의 보물함"
  },
  I0LE: {
    type: "chest",
    color: "god",
    label: "Purification God's Trinket",
    k_label: "정화의신의 악세서리함"
  },
  I0KY: {
    type: "chest",
    color: "god",
    label: "Purification God Spirit",
    k_label: "봉인된 정화의 신"
  },
  I0KZ: {
    type: "material",
    color: "black",
    label: "Purification Power (Old)",
    k_label: "(구)정화된 신의 권능"
  },
  I04B: {
    type: "material",
    color: "black",
    label: "Purification Power (New)",
    k_label: "(신)정화된 신의 권능"
  },
  I0L0: {
    type: "accessory",
    color: "god",
    stats: {
      str: 5500,
      agi: 5500,
      int: 5500,
      recovery: 2500,
      recovery_duration: 5,
      recovery_multiplier: 5
    },
    label: "Purified Essence",
    k_label: "정화의 신의 가호"
  },
  I0L1: {
    type: "accessory",
    color: "god",
    stats: {
      str: 5500,
      agi: 5500,
      int: 5500,
      damage_increase: 45
    },
    label: "Purified Fury Ring",
    k_label: "신의 분노",
    effects: ["Increases the damage by 120% for 15s (120s cd)"],
    k_effects: ["사용시 15초간 추가데미지 120%증가(쿨타임 120초)"]
  },
  I0L2: {
    type: "accessory",
    color: "god",
    stats: {
      int: 7000,
      mp: 70000
    },
    label: "God's Magic",
    k_label: "신의 마력",
    effects: ["Recover 65% of MAX MP every 28 seconds"],
    k_effects: ["28초마다 최대마나 65%회복"]
  },
  I0L3: {
    type: "accessory",
    color: "god",
    stats: {
      str: 5500,
      agi: 5500,
      int: 5500,
      mp: 40000,
      hp: 55000,
      movement_speed: 300,
      hp_regen: 3500
    },
    label: "Purified Magic Jewel",
    k_label: "정화의 신의 보석"
  },
  I0L4: {
    type: "accessory",
    color: "god",
    stats: {
      str: 7000,
      hp: 70000
    },
    label: "Purified Life Jewel",
    k_label: "정화된 생명력",
    effects: ["Recovers 65% of maximum HP every 28 seconds"],
    k_effects: ["28초마다 최대체력 65%회복"]
  },
  I0L5: {
    type: "accessory",
    color: "god",
    stats: {
      str: 5500,
      agi: 5500,
      int: 5500,
      armor: 1000,
      movement_speed: 300,
      magic_resistance: 32
    },
    label: "Purified Guardian Ring",
    k_label: "정화의 신의 수호"
  },
  I0L6: {
    type: "accessory",
    color: "god",
    stats: {
      str: 5500,
      agi: 5500,
      int: 5500,
      critical_hit: 5,
      critical_hit_chance: 25
    },
    label: "Divine Strike",
    k_label: "신의 일격"
  },
  I0L7: {
    type: "accessory",
    color: "god",
    stats: {
      str: 5500,
      agi: 5500,
      int: 5500,
      damage_increase: 70
    },
    label: "Divine Power",
    k_label: "신의 힘"
  },
  I0L8: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1000,
      str: 3500,
      agi: 3500,
      int: 3500,
      damage_increase: 60
    },
    label: "Strength Helmet",
    k_label: "정화의 신의 빛"
  },
  I0L9: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 900,
      str: 3500,
      agi: 3500,
      int: 3500,
      damage_increase: 90,
      damage_taken: 30
    },
    label: "Destruction Helmet",
    k_label: "파멸의 신의 저주"
  },
  I0LA: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1000,
      str: 3500,
      agi: 3500,
      int: 3500,
      damage_taken: -24
    },
    label: "Guardian Helmet",
    k_label: "수호신의 빛"
  },
  I0LB: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1000,
      str: 3500,
      agi: 3500,
      int: 3500
    },
    label: "Anti-Magic Helmet",
    k_label: "정화의 신의 결계",
    effects: ["Gives 12s of magic inmunity on use (90s cd)"],
    k_effects: ["사용시 12초간 마법면역(쿨타임 90초)"]
  },
  I0LC: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1600,
      str: 3500,
      agi: 3500,
      int: 3500,
      magic_resistance: 27
    },
    label: "Magic Resistance Helmet",
    k_label: "신의 저항 투구"
  },
  I0LD: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 800,
      int: 4500,
      mp: 35000
    },
    label: "Wisdom Helmet",
    k_label: "신의 지혜",
    effects: ["Recovers 100% MP on use (90s cd)"],
    k_effects: ["사용시 MP100% 회복 (쿨타임 90초)"]
  },
  I0LG: {
    type: "material",
    color: "black",
    label: "Epic Weapon Essence",
    k_label: "에픽 장비 정수"
  },
  I0LH: {
    type: "material",
    color: "black",
    label: "Epic Equipment Essence",
    k_label: "에픽 무기 정수"
  },
  I0LI: {
    type: "material",
    color: "black",
    label: "Epic Auxiliary Essence",
    k_label: "에픽 룬 정수"
  },
  I0JR: {
    label: "Chirno (Lower)",
    k_label: "치르밀(하급)",
    type: "chest",
    color: "black"
  },
  I0JS: {
    label: "Chirno (Intermediate)",
    k_label: "치르밀(중급)",
    type: "chest",
    color: "black"
  },
  I0JT: {
    label: "Chirno (Advanced)",
    k_label: "치르밀(고급)",
    type: "chest",
    color: "black"
  },
  I0JU: {
    label: "Chirno (Supreme)",
    k_label: "치르밀(최고급)",
    type: "chest",
    color: "black"
  },
  I0FY: {
    label: "Point 15",
    k_label: "포인트 15",
    type: "material",
    color: "black"
  },
  I0FZ: {
    label: "Point 25",
    k_label: "포인트 25",
    type: "material",
    color: "black"
  },
  I0G0: {
    label: "Point 40",
    k_label: "포인트 40",
    type: "material",
    color: "black"
  },
  I0G1: {
    label: "Point 60",
    k_label: "포인트 60",
    type: "material",
    color: "black"
  },
  I0FU: {
    label: "Spirit Package (Lower)",
    k_label: "하급 영혼 꾸러미",
    type: "chest",
    color: "black"
  },
  I0FV: {
    label: "Spirit Package (Intermediate)",
    k_label: "중급 영혼 꾸러미",
    type: "chest",
    color: "black"
  },
  I0FW: {
    label: "Spirit Package (Advanced)",
    k_label: "상급 영혼 꾸러미",
    type: "chest",
    color: "black"
  },
  I0FX: {
    label: "Spirit Package (Supreme)",
    k_label: "최상급 영혼 꾸러미",
    type: "chest",
    color: "black"
  },
  I0JV: {
    label: "Chirno Ice Crystals",
    k_label: "치르노의 얼음결정",
    type: "material",
    color: "black"
  },
  I0JW: {
    label: "Chirno Pet Coupon",
    k_label: "치르노 펫 쿠폰",
    type: "chest",
    color: "black"
  },
  I0EX: {
    label: "Event Bag Coupon",
    k_label: "이벤트 가방 쿠폰",
    type: "chest",
    color: "black"
  },
  I0JY: {
    label: "Chirno Event Bag Coupon",
    k_label: "이벤트 치르노 가방 쿠폰",
    type: "material",
    color: "black"
  },
  I0EV: {
    label: "Chirno bag (Lower)",
    k_label: "치르노의 겨울이벤트 (하급)",
    type: "chest",
    color: "black"
  },
  I0FK: {
    label: "Chirno Bag Coupon",
    k_label: "치르노의 집 입장권(하급)",
    type: "material",
    color: "black"
  },
  I0EW: {
    label: "Chirno Bag (Intermediate)",
    k_label: "치르노의 겨울이벤트 (중급)",
    type: "chest",
    color: "black"
  },
  I0FI: {
    label: "Chirno Bag (Advanced)",
    k_label: "치르노의 겨울이벤트 (고급)",
    type: "chest",
    color: "black"
  },
  I0FJ: {
    label: "Chirno Bag (Supreme)",
    k_label: "치르노의 겨울이벤트 (최고급)",
    type: "chest",
    color: "black"
  },

  I0JO: {
    label: "Chirno house ticket (Intermediate)",
    k_label: "치르노의 집 입장권(중급)",
    type: "chest",
    color: "black"
  },
  I0JP: {
    label: "Chirno house ticket (Advanced)",
    k_label: "치르노의 집 입장권(고급)",
    type: "chest",
    color: "black"
  },
  I0JQ: {
    label: "Chirno house ticket (Supreme)",
    k_label: "치르노의 집 입장권(최고급)",
    type: "chest",
    color: "black"
  },
  I0DU: {
    label: "Burning Soul",
    k_label: "불타는 영혼",
    type: "material",
    color: "black",
    disabled: true
  },
  I0DV: {
    label: "Agonizing Soul",
    k_label: "고통받는 영혼",
    type: "material",
    color: "black",
    disabled: true
  },
  I076: {
    label: "Spirit of Beresa",
    k_label: "베레스라의 영혼",
    type: "material",
    color: "black"
  },
  I07L: {
    label: "Spirit of the Blue Dragon",
    k_label: "블루드래곤의 영혼",
    type: "material",
    color: "black"
  },
  I086: {
    label: "Mother Tree’s Seeds",
    k_label: "마더트리의 씨앗",
    type: "material",
    color: "black"
  },
  I0K4: {
    label: "Beresa’s Soul (Small)",
    k_label: "베레스라의 영혼(스몰)",
    type: "chest",
    color: "black",
    disabled: true
  },
  I0K8: {
    label: "Spirit of the Blue Dragon (Small)",
    k_label: "블루드래곤의 영혼(스몰)",
    type: "chest",
    color: "black",
    disabled: true
  },
  I0K6: {
    label: "Mother Tree’s Seeds (Small)",
    k_label: "마더트리의 씨앗(스몰)",
    type: "chest",
    color: "black",
    disabled: true
  },
  I0FO: {
    label: "Lesser Training Certificate",
    k_label: "하급 수료증",
    type: "chest",
    color: "black",
    disabled: true
  },
  I0KA: {
    label: "Intermediate Training Certificate",
    k_label: "중급 수료증",
    type: "chest",
    color: "black",
    disabled: true
  },
  I0BV: {
    label: "Advanced Training Certificate",
    k_label: "상급 수료증",
    type: "chest",
    color: "black",
    disabled: true
  },
  I021: {
    label: "Beast Bone",
    k_label: "짐승 뼈검",
    type: "武器",
    color: "green",
    stats: {
      atk: 50
    }
  },
  I022: {
    label: "Beast’s Leather Fur",
    k_label: "늑대의 털옷",
    type: "armor",
    color: "green",
    stats: {
      armor: 10
    }
  },
  I00D: {
    label: "Wolf’s Fur Coat",
    k_label: "늑대의 털옷",
    type: "armor",
    color: "green",
    stats: {
      armor: 15
    }
  },
  I023: {
    label: "Canine Sword",
    k_label: "송곳니 검",
    type: "武器",
    color: "green",
    stats: {
      atk: 100
    }
  },
  I026: {
    label: "Armor of the Plains",
    k_label: "평원의 갑옷",
    type: "armor",
    color: "green",
    stats: {
      armor: 100,
      hp: 500,
      str: 40,
      attack_speed: 200
    }
  },
  I027: {
    label: "Peridot of Tallinn Forest",
    k_label: "탈린숲의 정기",
    type: "accessory",
    color: "green",
    stats: {
      hp_regen: 100
    }
  },
  I028: {
    label: "Axe of a Killer",
    k_label: "살인용 도끼",
    type: "武器",
    color: "green",
    stats: {
      atk: 200
    }
  },
  I029: {
    label: "Bloody Armor",
    k_label: "피뭍은 갑옷",
    type: "artifact",
    color: "green",
    stats: {
      armor: 25
    }
  },
  I02C: {
    label: "Shoes of Death",
    k_label: "탈린숲의 정기",
    type: "artifact",
    color: "green",
    stats: {
      str: 100,
      agi: 100,
      int: 100,
      movement_speed: 75
    }
  },
  I02D: {
    label: "Sword of the Kingdom",
    k_label: "왕국의 검",
    type: "武器",
    color: "green",
    stats: {
      atk: 1000,
      str: 300
    }
  },
  I02E: {
    label: "Dagger of the Kingdom",
    k_label: "왕국의 단검",
    type: "武器",
    color: "green",
    stats: {
      atk: 1200,
      agi: 250,
      attack_speed: 20
    }
  },
  I02F: {
    label: "Staff of the Kingdom",
    k_label: "왕국의 지팡이",
    type: "武器",
    color: "green",
    stats: {
      int: 350,
      atk: 800
    }
  },
  I02G: {
    label: "Kodiak Bear Claws",
    k_label: "콜라곰의 갈퀴",
    type: "武器",
    color: "green",
    stats: {
      atk: 350,
      str: 60
    }
  },
  I02H: {
    label: "Kodiak Bone Wand",
    k_label: "콜라곰 뼈지팡이",
    type: "武器",
    color: "green",
    stats: {
      int: 70,
      atk: 300
    }
  },
  I02I: {
    label: "Kodiak Bone Bow",
    k_label: "콜라곰 뼈활",
    type: "武器",
    color: "green",
    stats: {
      atk: 400,
      agi: 50
    }
  },
  I02K: {
    label: "Exceptional Sword",
    k_label: "도적 두목의 중검",
    type: "武器",
    color: "green",
    stats: {
      str: 100,
      atk: 400
    }
  },
  I02L: {
    label: "Exceptional Staff",
    k_label: "고급 지팡이",
    type: "武器",
    color: "green",
    stats: {
      int: 120,
      atk: 300
    }
  },
  I02M: {
    label: "Exceptional Dagger",
    k_label: "고급 단검",
    type: "武器",
    color: "green",
    stats: {
      atk: 400,
      agi: 100
    }
  },
  I02N: {
    label: "Frost Ring",
    k_label: "도적 두목의 중검",
    type: "accessory",
    color: "green",
    stats: {
      str: 60,
      int: 60,
      agi: 60
    }
  },
  I02R: {
    label: "Wendigo’s Bone Wand",
    k_label: "웬디고의 뼈지팡이",
    type: "武器",
    color: "green",
    stats: {
      int: 120,
      atk: 500
    }
  },
  I02P: {
    label: "Wendigo’s Claws",
    k_label: "웬디고의 갈퀴",
    type: "武器",
    color: "green",
    stats: {
      str: 100,
      atk: 600
    }
  },
  I02Q: {
    label: "Wendigo Bone Bow",
    k_label: "웬디고의 뼈활",
    type: "武器",
    color: "green",
    stats: {
      agi: 80,
      atk: 700
    }
  },
  I02J: {
    label: "Bandit Leader’s Armor",
    k_label: "도적두목의 중갑옷",
    type: "armor",
    color: "green",
    stats: {
      armor: 80,
      hp: 1000
    }
  },
  I02T: {
    label: "Frost armor",
    k_label: "서리 갑옷",
    type: "armor",
    color: "green",
    stats: {
      armor: 100,
      hp: 1500
    }
  },
  I006: {
    label: "Plain’s Sword",
    k_label: "평원의 검",
    type: "武器",
    color: "green",
    stats: {
      str: 60,
      atk: 350
    }
  },
  I007: {
    label: "Plain’s Dagger",
    k_label: "평원의 단검",
    type: "武器",
    color: "green",
    stats: {
      agi: 50,
      atk: 400
    }
  },
  I008: {
    label: "Plain’s Staff",
    k_label: "평원의 지팡이",
    type: "武器",
    color: "green",
    stats: {
      int: 70,
      atk: 300
    }
  },
  I003: {
    label: "Lunda Sword",
    k_label: "룬다 검",
    type: "武器",
    color: "green",
    stats: {
      str: 120,
      atk: 700
    }
  },
  I004: {
    label: "Lunda Cane",
    k_label: "룬다 지팡이",
    type: "武器",
    color: "green",
    stats: {
      int: 150,
      atk: 600
    }
  },
  I005: {
    label: "Lunda Dagger",
    k_label: "룬다 단검",
    type: "武器",
    color: "green",
    stats: {
      agi: 110,
      atk: 800
    }
  },
  I00E: {
    label: "Plain Grove Armor",
    k_label: "평원의 로브",
    type: "armor",
    color: "green",
    stats: {
      armor: 50,
      int: 70,
      mp: 500
    }
  },
  I00G: {
    label: "Beach Sword",
    k_label: "해변의 검",
    type: "武器",
    color: "green",
    stats: {
      str: 100,
      atk: 650
    }
  },
  I00H: {
    label: "Beach Dagger",
    k_label: "해변의 단검",
    type: "武器",
    color: "green",
    stats: {
      agi: 90,
      atk: 750
    }
  },
  I00I: {
    label: "Beach Wand",
    k_label: "해변의 지팡이",
    type: "武器",
    color: "green",
    stats: {
      int: 110,
      atk: 600
    }
  },
  I00J: {
    label: "Cecilia Sword",
    k_label: "시실리아 검",
    type: "武器",
    color: "green",
    stats: {
      str: 150,
      atk: 900
    }
  },
  I00K: {
    label: "Cecilia Dagger",
    k_label: "시실리아 단검",
    type: "武器",
    color: "green",
    stats: {
      agi: 130,
      atk: 1000
    }
  },
  I00L: {
    label: "Cecilia Cane",
    k_label: "시실리아 지팡이",
    type: "武器",
    color: "green",
    stats: {
      int: 180,
      atk: 800
    }
  },
  I00M: {
    label: "Plain Leather",
    k_label: "평원의 가죽옷",
    type: "armor",
    color: "green",
    stats: {
      armor: 80,
      hp: 300,
      agi: 60
    }
  },
  I00N: {
    label: "Beach Armor",
    k_label: "해변의 갑옷",
    type: "armor",
    color: "green",
    stats: {
      armor: 120,
      hp: 1000,
      str: 60
    }
  },
  I00O: {
    label: "Beach Robe",
    k_label: "해변의 로브",
    type: "armor",
    color: "green",
    stats: {
      armor: 70,
      int: 90,
      mp: 1000
    }
  },
  I00P: {
    label: "Cecilia Glyph Robe",
    k_label: "시실리아 문양 로브",
    type: "armor",
    color: "green",
    stats: {
      armor: 100,
      int: 110,
      hp: 500,
      mp: 2000
    }
  },
  I00Q: {
    label: "Cecilia Glyph Amor",
    k_label: "시실리아 문양 갑옷",
    type: "armor",
    color: "green",
    stats: {
      armor: 150,
      hp: 2500,
      str: 90
    }
  },
  I00X: {
    label: "Cecilia Glyph Leather",
    k_label: "시실리아 문양 가죽옷",
    type: "armor",
    color: "green",
    stats: {
      armor: 130,
      agi: 110,
      hp: 2000
    }
  },
  I00Y: {
    label: "Cecilia Helmet",
    k_label: "시실리아 문양 투구",
    type: "helmet",
    color: "green",
    stats: {
      armor: 30,
      int: 50,
      str: 50,
      agi: 50
    }
  },
  I010: {
    label: "Bronze Brooch",
    k_label: "브론즈 브로치",
    type: "accessory",
    color: "green",
    stats: {
      str: 250,
      int: 250,
      agi: 250,
      damage_increase: 5
    }
  },
  I011: {
    label: "Cecilia Ring",
    k_label: "시실리아 반지",
    type: "accessory",
    color: "green",
    stats: {
      str: 120,
      int: 120,
      agi: 120
    }
  },
  I00Z: {
    label: "Cerulean Wing",
    k_label: "블루 윙",
    type: "artifact",
    color: "green",
    stats: {
      str: 150,
      int: 150,
      agi: 150,
      damage_increase: 3
    }
  },
  I00C: {
    label: "Beach Leather",
    k_label: "해변의 가죽옷",
    type: "armor",
    color: "green",
    stats: {
      armor: 100,
      hp: 800,
      agi: 80
    }
  },
  I013: {
    label: "Volcanic Sword",
    k_label: "화산의 검",
    type: "武器",
    color: "green",
    stats: {
      str: 120,
      atk: 800
    }
  },
  I014: {
    label: "Volcanic Dagger",
    k_label: "화산의 단검",
    type: "武器",
    color: "green",
    stats: {
      atk: 900,
      agi: 110
    }
  },
  I015: {
    label: "Volcanic Staff",
    k_label: "화산의 지팡이",
    type: "武器",
    color: "green",
    stats: {
      atk: 750,
      int: 130
    }
  },
  I019: {
    label: "Augustine Sword",
    k_label: "오거스틴 검",
    type: "武器",
    color: "green",
    stats: {
      atk: 1100,
      str: 170
    }
  },
  I01A: {
    label: "Augustine Dagger",
    k_label: "오거스틴 단검",
    type: "武器",
    color: "green",
    stats: {
      atk: 1200,
      agi: 160
    }
  },
  I01B: {
    label: "Augustine Cane",
    k_label: "오거스틴 지팡이",
    type: "武器",
    color: "green",
    stats: {
      atk: 1000,
      int: 200
    }
  },
  I01C: {
    label: "Augustine Cane",
    k_label: "폭렬의 검",
    type: "武器",
    color: "green",
    stats: {
      atk: 3000,
      str: 400
    }
  },
  I01D: {
    label: "Sorcerer’s Dagger",
    k_label: "폭렬의 단검",
    type: "武器",
    color: "green",
    stats: {
      atk: 3000,
      agi: 400
    }
  },
  I01E: {
    label: "Augustine Wand",
    k_label: "폭렬의 지팡이",
    type: "武器",
    color: "green",
    stats: {
      atk: 2000,
      int: 500
    }
  },
  I01F: {
    label: "Volcanic Armor",
    k_label: "화산의 갑옷",
    type: "armor",
    color: "green",
    stats: {
      hp: 1500,
      str: 80,
      armor: 150
    }
  },
  I01G: {
    label: "Volcanic Leather",
    k_label: "화산의 가죽옷",
    type: "armor",
    color: "green",
    stats: {
      hp: 1300,
      agi: 100,
      armor: 130
    }
  },
  I01H: {
    label: "Volcanic Robe",
    k_label: "화산의 로브",
    type: "armor",
    color: "green",
    stats: {
      int: 110,
      armor: 100,
      mp: 1500
    }
  },
  I01I: {
    label: "Augustine Flame Armor",
    k_label: "오거스틴 화염 갑옷",
    type: "armor",
    color: "green",
    stats: {
      hp: 3000,
      str: 120,
      armor: 180
    }
  },
  I01J: {
    label: "Augustine Flame Leather",
    k_label: "오거스틴 화염 가죽갑옷",
    type: "armor",
    color: "green",
    stats: {
      hp: 2500,
      agi: 140,
      armor: 160
    }
  },
  I01K: {
    label: "Augustine Flame Robe",
    k_label: "오거스틴 화염 로브",
    type: "armor",
    color: "green",
    stats: {
      hp: 1000,
      int: 140,
      armor: 130,
      mp: 2500
    }
  },
  I01L: {
    label: "Augustine Ring",
    k_label: "오거스틴 반지",
    type: "accessory",
    color: "green",
    stats: {
      int: 160,
      str: 160,
      agi: 160
    }
  },
  I01M: {
    label: "Augustine Helmet",
    k_label: "오거스틴 문양 투구",
    type: "helmet",
    color: "green",
    stats: {
      int: 70,
      str: 70,
      agi: 70,
      armor: 50
    }
  },
  I01N: {
    label: "Snow Mountain Sword",
    k_label: "설산의 검",
    type: "武器",
    color: "green",
    stats: {
      atk: 1000,
      str: 140
    }
  },
  I01O: {
    label: "Snow Mountain Dagger",
    k_label: "설산의 단검",
    type: "武器",
    color: "green",
    stats: {
      atk: 1100,
      agi: 130
    }
  },
  I01P: {
    label: "Snow Mountain Cane",
    k_label: "설산의 지팡이",
    type: "武器",
    color: "green",
    stats: {
      atk: 900,
      int: 150
    }
  },
  I01T: {
    label: "Snow Mountain’s Armor",
    k_label: "설산의 갑옷",
    type: "armor",
    color: "green",
    stats: {
      hp: 2000,
      str: 100,
      armor: 180
    }
  },
  I01U: {
    label: "Snow Mountain’s Leather",
    k_label: "설산의 가죽옷",
    type: "armor",
    color: "green",
    stats: {
      hp: 1500,
      agi: 130,
      armor: 150
    }
  },
  I01V: {
    label: "Snow Mountain’s Robe",
    k_label: "설산의 로브",
    type: "armor",
    color: "green",
    stats: {
      int: 130,
      armor: 120,
      mp: 2000
    }
  },
  I01W: {
    label: "Snowy Ice Armor",
    k_label: "설산 얼음 갑옷",
    type: "armor",
    color: "green",
    stats: {
      hp: 3000,
      str: 150,
      armor: 200
    }
  },
  I01X: {
    label: "Snowy Ice Leather",
    k_label: "설산 얼음 가죽옷",
    type: "armor",
    color: "green",
    stats: {
      hp: 2500,
      agi: 170,
      armor: 180
    }
  },
  I01Y: {
    label: "Snowy Ice Robes",
    k_label: "설산 얼음 로브",
    type: "armor",
    color: "green",
    stats: {
      hp: 1000,
      int: 170,
      armor: 150,
      mp: 3000
    }
  },
  I01Q: {
    label: "Mountain Sword",
    k_label: "마운틴 검",
    type: "武器",
    color: "green",
    stats: {
      atk: 1300,
      str: 200
    }
  },
  I01R: {
    label: "Mountain Dagger",
    k_label: "마운틴 단검",
    type: "武器",
    color: "green",
    stats: {
      atk: 1400,
      agi: 190
    }
  },
  I01S: {
    label: "Mountain Cane",
    k_label: "마운틴 지팡이",
    type: "武器",
    color: "green",
    stats: {
      atk: 1200,
      int: 230
    }
  },
  I01Z: {
    label: "Icecap Armor",
    k_label: "만년설산 아머",
    type: "armor",
    color: "green",
    stats: {
      hp: 5000,
      str: 350,
      armor: 350
    }
  },
  I020: {
    label: "Icecap Leather Armor",
    k_label: "만년설산 가죽갑옷",
    type: "armor",
    color: "green",
    stats: {
      hp: 4000,
      agi: 400,
      armor: 300
    }
  },
  I02S: {
    label: "Icecap Robes",
    k_label: "만년설산 로브",
    type: "armor",
    color: "green",
    stats: {
      hp: 3000,
      int: 400,
      armor: 200,
      mp: 3000
    }
  },
  I02U: {
    label: "Snow Mountain Helmet",
    k_label: "마운틴 투구",
    type: "helmet",
    color: "green",
    stats: {
      agi: 100,
      int: 100,
      str: 100,
      armor: 70
    }
  },
  I02V: {
    label: "Snow Mountain Ring",
    k_label: "마운틴 반지",
    type: "accessory",
    color: "green",
    stats: {
      agi: 200,
      str: 200,
      int: 200
    }
  },
  I02W: {
    label: "Mana Well",
    k_label: "마력의 원천",
    type: "accessory",
    color: "green",
    stats: {
      int: 500,
      mp: 5000
    }
  },
  I02X: {
    label: "Antique Ring",
    k_label: "리치의 고대반지",
    type: "accessory",
    color: "green",
    stats: {
      agi: 300,
      str: 300,
      int: 300,
      damage_increase: 7
    }
  },
  I02Y: {
    label: "Eternal Vitality",
    k_label: "영원한 생명력",
    type: "accessory",
    color: "green",
    stats: {
      agi: 300,
      str: 300,
      int: 300,
      hp_regen: 300
    }
  },
  I02Z: {
    label: "Magical Note of The Resurrected Wizard",
    k_label: "부활의 마법서",
    type: "武器",
    color: "green",
    stats: {
      atk: 4000,
      int: 700
    }
  },
  I030: {
    label: "Dragon Leather Boots",
    k_label: "드레곤 가죽 신발",
    type: "artifact",
    color: "green",
    stats: {
      agi: 250,
      int: 250,
      str: 250,
      movement_speed: 90
    }
  },
  I031: {
    label: "Alchemist Helmet",
    k_label: "연금술사 투구",
    type: "helmet",
    color: "green",
    stats: {
      str: 200,
      int: 200,
      agi: 200,
      armor: 150
    }
  },
  I000: {
    disabled: true,
    label: "Frost Robe",
    stats: {
      hp: 2000,
      int: 250,
      armor: 200,
      mp: 3000
    }
  },
  I001: {
    disabled: true,
    label: "Frost Armor",
    stats: {
      hp: 4000,
      str: 230,
      armor: 250
    }
  },
  I002: {
    disabled: true,
    label: "Frost Leather Armor",
    stats: {
      hp: 3000,
      agi: 260,
      armor: 220
    }
  },
  I00F: {
    disabled: true,
    label: "Breeze Helmet",
    stats: {
      agi: 80,
      int: 80,
      str: 80,
      armor: 50
    }
  },
  I05R: {
    disabled: true,
    label: "Unholy Soul Sword",
    stats: {
      atk: 8000,
      str: 700
    }
  },
  I05S: {
    disabled: true,
    label: "Deadly Dagger",
    stats: {
      atk: 10000,
      agi: 650
    }
  },
  I03N: {
    disabled: true,
    label: "Soul Ring",
    stats: {
      agi: 400,
      str: 400,
      int: 400,
      damage_increase: 8
    }
  },
  I05T: {
    disabled: true,
    label: "Death Knight’s Helm",
    stats: {
      agi: 250,
      int: 250,
      str: 250,
      armor: 200,
      damage_increase: 5
    }
  },
  I0IY: {
    disabled: true,
    label: "500 Points"
  },
  I0LK: {
    type: "material",
    color: "black",
    label: "Mythic Weapon Essence",
    k_label: "신화 무기 정수"
  },
  I0LL: {
    type: "material",
    color: "black",
    label: "Mythic Equipement Essence",
    k_label: "신화 장비 정수"
  },
  I0LM: {
    type: "material",
    color: "black",
    label: "Mythic Auxiliary Essence",
    k_label: "신화 룬 정수"
  },
  I0LO: {
    type: "material",
    color: "black",
    label: "Archangel Mark",
    k_label: "대천사의 증표"
  },
  I0LQ: {
    type: "material",
    color: "black",
    label: "Blue Dragon Essence",
    k_label: "블루드래곤의 정수"
  },
  I0LR: {
    type: "material",
    color: "black",
    label: "Beresa Essence",
    k_label: "블루드래곤의 정수"
  },
  I0LS: {
    type: "material",
    color: "black",
    label: "Mother Tree Essence",
    k_label: "마더트리의 정수"
  },
  I0LT: {
    type: "material",
    color: "black",
    label: "Intense Energy",
    k_label: "강렬한 기운",
    effect: [
      "Allows you to enter a special boss zone and summons a special boss"
    ],
    k_effects: ["사용시 특수 보스존에 입장가능해지며 특수 보스를 소환합니다"]
  },
  I0LU: {
    type: "chest",
    color: "black",
    label: "Chaos Essence",
    k_label: "혼돈의 영혼"
  },
  I0LV: {
    label: "Marissa's lost bag (Lower)",
    k_label: "마리사가 잃어버린 주머니(하급)",
    type: "chest",
    color: "black"
  },
  I0LW: {
    label: "Marissa's lost bag (Intermediate)",
    k_label: "마리사가 잃어버린 주머니(중급)",
    type: "chest",
    color: "black"
  },
  I0LX: {
    label: "Marissa's lost bag (Advanced)",
    k_label: "마리사가 잃어버린 주머니(상급)",
    type: "chest",
    color: "black"
  },
  I0LY: {
    label: "Marissa's lost bag (Supreme)",
    k_label: "마리사가 잃어버린 주머니(최상급)",
    type: "chest",
    color: "black"
  },
  I0M3: {
    label: "Very intense energy",
    k_label: "매우 강렬한 기운",
    type: "material",
    color: "black"
  },
  I0M5: {
    label: "Archangel’s essence",
    k_label: "대천사의 정수",
    type: "material",
    color: "black"
  },
  I0M6: {
    label: "Essence of the Great Demon",
    k_label: "대악마의 정수",
    type: "material",
    color: "black"
  },
  I0M7: {
    label: "Chaos Soul",
    k_label: "대혼돈의 영혼",
    type: "chest",
    color: "red"
  },
  I0M4: {
    type: "武器",
    color: "god",
    k_label: "최상급 생명의 신궁",
    label: "Supreme God's Bow of Life",
    stats: {
      atk: 600000,
      agi: 13000,
      hp: 150000
    },
    effects: [
      "Every 10 attacks will recover AGI x6.7 HP (9s cd)",
      "Every 6 spells will recover AGI x6.7 HP (10s cd)",
      "On Use: Restores AGI x11 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (AGI x6.7)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (AGI x6.7)(쿨타임 10초)",
      "사용시  생명력회복 (AGI x11)(쿨타임 120초)"
    ]
  },
  I0M8: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      agi: 13000,
      damage_increase: 200,
      damage_taken: 50
    },
    k_label: "최상급 신의 건들릿",
    label: "Supreme God's Gauntlets"
  },
  I0M9: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      int: 13000
    },
    k_label: "최상급 신의 권능",
    label: "Supreme God's Blessed Staff",
    effects: [
      "Summons an apostle of the shrine, inflicting (INT x 39) damage per hit"
    ],
    k_effects: [
      "사용시 신궁의 사도를 소환하며, 매 타격마다 (지능 x 39)의 피해를 입힙니다"
    ]
  },
  I0MA: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      agi: 13000,
      attack_speed: 300,
      attack_agi: true,
      attack_real: 86
    },
    k_label: "최상급 신의 단검",
    label: "Supreme God's Dagger"
  },
  I0MB: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      str: 13000,
      damage_increase: 100
    },
    k_label: "최상급 신의 대검",
    label: "Supreme God's GreatSword",
    effects: ["Deals damage proportional to stats when used (120s cd)"],
    k_effects: ["사용시 신의 일격 시전 (쿨타임 120초)(능력치 비례)"]
  },
  I0MC: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      agi: 13000,
      damage_increase: 100
    },
    k_label: "최상급 신의 대검",
    label: "Supreme God's Blade",
    effects: ["Deals damage proportional to stats when used (120s cd)"],
    k_effects: ["사용시 신의 일격 시전 (쿨타임 120초)(능력치 비례)"]
  },
  I0MD: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      int: 13000,
      mp: 50000,
      contract: 0.000006,
      int_tick: true
    },
    label: "Supreme God's Magic Staff",
    k_label: "최상급 신의 마력 지팡이"
  },
  I0ME: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      int: 13000,
      hp: 150000
    },
    label: "Supreme God's Staff of Life",
    k_label: "최상급 신의 생명 지팡이",
    effects: [
      "Every 4 spells will recover INT x7.5 HP (10s cd)",
      "On Use: Restore INT x11 HP of all allies within range (80s cd)"
    ],
    k_effects: [
      "스킬사용 4회시 생명력 회복 (INT x7.5)(쿨타임 10초)",
      "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x11)(쿨타임 80초)"
    ]
  },
  I0MF: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      str: 13000,
      hp: 150000
    },
    label: "Supreme God's Sword of Life",
    k_label: "최상급 신의 생명의검",
    effects: [
      "Every 10 attacks will recover STR x6.7 HP (9s cd)",
      "Every 6 spells will recover STR x6.7 HP (10s cd)",
      "On Use: Restores STR x11 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (STR x6.7)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (STR x6.7)(쿨타임 10초)",
      "사용시  생명력회복 (STR x11)(쿨타임 120초)"
    ]
  },
  I0MG: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      str: 11000,
      agi: 11000,
      attack_str_agi: true,
      attack_real: 26
    },
    label: "Supreme God's Sword",
    k_label: "최상급 신의 소검",
    effects: ["On use: 400000 + (STR + AGI) x180 damage"],
    k_effects: ["사용시 400000 + (STR + AGI) x180 (쿨타임 80초)"]
  },
  I0MH: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      int: 13000,
      int_tick: true,
      attack_int_real: 205
    },
    label: "Supreme God's Judgement Staff",
    k_label: "최상급 신의 심판 지팡이"
  },
  I0MI: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      str: 13000,
      attack_speed: 250,
      attack_real: 88,
      attack_str: true
    },
    label: "Supreme God's Judgement",
    k_label: "최상급 신의 심판"
  },
  I0MJ: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      str: 11000,
      int: 11000,
      int_tick: true,
      attack_str_int_real: 77
    },
    label: "Supreme God's Staff",
    k_label: "최상급 신의 일격 지팡이"
  },
  I0MK: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      str: 9500,
      agi: 9500,
      int: 9500
    },
    label: "Supreme God's Longsword",
    k_label: "최상급 신의 장검",
    effects: ["Deals 420000 + All Stats * 380 when used (120s cd)"],
    k_effects: [
      "사용시 신의 일격 시전 (쿨타임 120초)(420000 + 모든 통계 * 380)"
    ]
  },
  I0ML: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      int: 13000,
      damage_increase: 100
    },
    label: "Supreme God's Amber Staff",
    k_label: "최상급 신의 증폭 지팡이"
  },
  I0MM: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      str: 13000
    },
    label: "Supreme God's Glaive",
    k_label: "최상급 신의 창",
    effects: [
      "On Use: Causes an explosion, dealing 700000 + STR x520 damage (38s cd)"
    ],
    k_effects: ["사용시 용기의 폭발 시전 (700000 + STR x520)(쿨타임 38초)"]
  },
  I0MN: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1300,
      int: 8000,
      mp: 60000,
      mps: 70
    },
    label: "Supreme Divine Mana Robes",
    k_label: "최상급 신의 마력 로브"
  },
  I0MO: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1700,
      str: 8000,
      hp: 50000,
      movement_speed: 200,
      damage_increase: 70
    },
    label: "Supreme Purified Bright Armor",
    k_label: "최상급 신의 빛의 갑옷"
  },
  I0MP: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1600,
      agi: 8000,
      hp: 50000,
      movement_speed: 200,
      damage_increase: 70
    },
    label: "Supreme Purified Bright Greaves",
    k_label: "최상급 신의 빛의 경갑"
  },
  I0MQ: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1300,
      int: 8000,
      hp: 50000,
      movement_speed: 200,
      damage_increase: 70
    },
    label: "Supreme Purified Bright Robes",
    k_label: "최상급 신의 빛의 로브"
  },
  I0MR: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1700,
      str: 8000,
      hp: 55000,
      damage_taken: -35
    },
    label: "Supreme Purified Guardian Armor",
    k_label: "최상급 신의 수호 갑옷"
  },
  I0MS: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1600,
      agi: 8000,
      hp: 55000,
      damage_taken: -35
    },
    label: "Supreme Purified Guardian Greaves",
    k_label: "최상급 신의 수호 경갑"
  },
  I0MT: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1300,
      int: 8000,
      hp: 55000,
      damage_taken: -35
    },
    label: "Supreme Purified Guardian Robes",
    k_label: "최상급 신의 수호 로브"
  },
  I0MU: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1300,
      str: 6000,
      agi: 6000,
      int: 6000,
      hp: 55000,
      max_health: 38
    },
    label: "Supreme Purified Life Armor",
    k_label: "최상급 정화된 생명의 갑옷"
  },
  I0MV: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1300,
      str: 6000,
      agi: 6000,
      int: 6000,
      hp: 55000,
      hp_regen_percent: 5
    },
    label: "Supreme Purified Healing Armor",
    k_label: "최상급 정화된 치유의 갑옷"
  },
  I0MW: {
    type: "armor",
    color: "god",
    stats: {
      str: 8000,
      armor: 1700,
      hp: 55000,
      hp_regen: -3500,
      flame_armor: 80
    },
    label: "Supreme Purified Flame Armor",
    k_label: "최상급 정화의 불꽃 갑옷"
  },
  I0MX: {
    type: "accessory",
    color: "god",
    stats: {
      int: 8000,
      mp: 80000
    },
    label: "Supreme God's Magic",
    k_label: "최상급 신의 마력",
    effects: ["Recover 70% of MAX MP every 28 seconds"],
    k_effects: ["28초마다 최대마나 70%회복"]
  },
  I0SO: {
    type: "accessory",
    color: "god",
    stats: {
      int: 9500,
      mp: 90000
    },
    label: "Dimensional Magic",
    k_label: "차원의 마력",
    effects: ["Recover 75% of MAX MP every 28 seconds"],
    k_effects: ["28초마다 최대마나 75%회복"]
  },
  I0MY: {
    type: "accessory",
    color: "god",
    stats: {
      str: 6000,
      agi: 6000,
      int: 6000,
      damage_increase: 50
    },
    label: "Supreme Purified Fury Ring",
    k_label: "최상급 신의 분노",
    effects: ["Increases the damage by 135% for 15s (120s cd)"],
    k_effects: ["사용시 15초간 추가데미지 135%증가(쿨타임 120초)"]
  },
  I0SP: {
    type: "accessory",
    color: "god",
    stats: {
      str: 7000,
      agi: 7000,
      int: 7000,
      damage_increase: 60
    },
    label: "Dimensional Fury Ring",
    k_label: "차원의 분노",
    effects: ["Increases the damage by 150% for 15s (120s cd)"],
    k_effects: ["사용시 15초간 추가데미지 150%증가(쿨타임 120초)"]
  },
  I0MZ: {
    type: "accessory",
    color: "god",
    stats: {
      str: 6000,
      agi: 6000,
      int: 6000,
      critical_hit: 5.5,
      critical_hit_chance: 25
    },
    label: "Supreme Divine Strike",
    k_label: "최상급 신의 일격"
  },
  I0SQ: {
    type: "accessory",
    color: "god",
    stats: {
      str: 7000,
      agi: 7000,
      int: 7000,
      critical_hit: 6.5,
      critical_hit_chance: 25
    },
    label: "Dimensional Strike",
    k_label: "차원의 일격"
  },
  I0N0: {
    type: "accessory",
    color: "god",
    stats: {
      str: 6000,
      agi: 6000,
      int: 6000,
      damage_increase: 80
    },
    label: "Supreme Divine Power",
    k_label: "최상급 신의 힘"
  },
  I0SR: {
    type: "accessory",
    color: "god",
    stats: {
      str: 7000,
      agi: 7000,
      int: 7000,
      damage_increase: 100
    },
    label: "Dimensional Power",
    k_label: "차원의 힘"
  },
  I0N1: {
    type: "accessory",
    color: "god",
    stats: {
      str: 8000,
      hp: 80000
    },
    label: "Supreme Purified Life Jewel",
    k_label: "최상급 정화된 생명력",
    effects: ["Recovers 70% of maximum HP every 28 seconds"],
    k_effects: ["28초마다 최대체력 70%회복"]
  },
  I0SS: {
    type: "accessory",
    color: "god",
    stats: {
      str: 9500,
      hp: 90000
    },
    label: "Dimensional Life Jewel",
    k_label: "차원의 생명력",
    effects: ["Recovers 75% of maximum HP every 28 seconds"],
    k_effects: ["28초마다 최대체력 75%회복"]
  },
  I0N2: {
    type: "accessory",
    color: "god",
    stats: {
      str: 6000,
      agi: 6000,
      int: 6000,
      recovery: 3000,
      recovery_duration: 5,
      recovery_multiplier: 5.5
    },
    label: "Supreme Purified Essence",
    k_label: "최상급 정화의 신의 가호"
  },
  I0ST: {
    type: "accessory",
    color: "god",
    stats: {
      str: 7000,
      agi: 7000,
      int: 7000,
      recovery: 4000,
      recovery_duration: 6,
      recovery_multiplier: 5.5
    },
    label: "Dimensional Essence",
    k_label: "차원의 가호"
  },
  I0N3: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2000,
      agi: 2000,
      int: 2000,
      mp: 20000
    },
    label: "Supreme God's Mana Rune",
    k_label: "최상급 신의 마나룬"
  },
  I0N4: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2000,
      agi: 2000,
      int: 2000
    },
    label: "Supreme God's Mana Potion",
    k_label: "최상급 신의 마나포션",
    effects: ["On Use: Restore 45% of maximum mana (25s cd)"],
    k_effects: ["사용시 최대마나 45%회복 (쿨타임 25초)"]
  },
  I0N5: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2000,
      agi: 2000,
      int: 2000,
      hp: 35000
    },
    label: "Supreme God's Life Rune",
    k_label: "최상급 대혼돈의 생명룬"
  },
  I0N6: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2000,
      agi: 2000,
      int: 2000,
      movement_speed: 150,
      attack_speed: 160
    },
    label: "Supreme God's Ascension Rune",
    k_label: "최상급 신의 순풍룬"
  },
  I0N7: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2000,
      agi: 2000,
      int: 2000,
      damage_increase: 30
    },
    label: "Supreme God's Magic Rune",
    k_label: "최상급 신의 일격룬"
  },
  I0N8: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2000,
      agi: 2000,
      int: 2000
    },
    label: "Supreme God's Potion",
    k_label: "최상급 신의 포션",
    effects: ["On Use: Restore 50% of health (25s cd)"],
    k_effects: ["사용시 최대생명력 50%회복 (쿨타임 25초)"]
  },
  I0N9: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1100,
      str: 4000,
      agi: 4000,
      int: 4000,
      damage_taken: -27
    },
    label: "Supreme Guardian Helmet",
    k_label: "최상급 수호신의 빛"
  },
  I0SW: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1200,
      str: 5000,
      agi: 5000,
      int: 5000,
      damage_taken: -30
    },
    label: "Dimensional Guardian Helmet",
    k_label: "차원의 수호의 힘"
  },
  I0NA: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1700,
      str: 4000,
      agi: 4000,
      int: 4000,
      magic_resistance: 30
    },
    label: "Supreme Magic Resistance Helmet",
    k_label: "최상급 신의 저항 투구"
  },
  I0SX: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1900,
      str: 5000,
      agi: 5000,
      int: 5000,
      magic_resistance: 35
    },
    label: "Dimensional Resistance Helmet",
    k_label: "차원의 저항 투구"
  },
  I0NB: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 900,
      int: 5500,
      mp: 40000
    },
    label: "Supreme Wisdom Helmet",
    k_label: "최상급 신의 지혜",
    effects: ["Recovers 100% MP on use (80s cd)"],
    k_effects: ["사용시 MP100% 회복 (쿨타임 80초)"]
  },
  I0SY: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1000,
      int: 7000,
      mp: 50000
    },
    label: "Dimensional Wisdom Helmet",
    k_label: "차원의 지혜",
    effects: ["Recovers 100% MP on use (70s cd)"],
    k_effects: ["사용시 MP100% 회복 (쿨타임 70초)"]
  },
  I0NC: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1100,
      str: 4000,
      agi: 4000,
      int: 4000
    },
    label: "Supreme Anti-Magic Helmet",
    k_label: "최상급 정화의 신의 결계",
    effects: ["Gives 13s of magic inmunity on use (90s cd)"],
    k_effects: ["사용시 13초간 마법면역(쿨타임 90초)"]
  },
  I0ND: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1100,
      str: 4000,
      agi: 4000,
      int: 4000,
      damage_increase: 70
    },
    label: "Supreme Strength Helmet",
    k_label: "최상급 정화의 신의 빛"
  },
  I0NE: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1000,
      str: 4000,
      agi: 4000,
      int: 4000,
      damage_increase: 110,
      damage_taken: 40
    },
    label: "Supreme Destruction Helmet",
    k_label: "최상급 파멸의 신의 저주"
  },
  I0NF: {
    type: "artifact",
    color: "god",
    stats: {
      str: 6000,
      agi: 6000,
      int: 6000,
      damage_increase: 36
    },
    label: "Supreme Light Wings of Destruction",
    k_label: "최상급 눈부신 신의 날개",
    effects: ["Enemies within range take 36% Additional Damage"],
    k_effects: ["범위내 적들 추가데미지 36% 오라"]
  },
  I0NG: {
    type: "artifact",
    color: "god",
    stats: {
      str: 6000,
      agi: 6000,
      int: 6000,
      attack_speed: 300,
      movement_speed: 200
    },
    label: "Supreme Boots of Destruction",
    k_label: "최상급 신의 각반",
    effects: ["On Use: Dash forward (2.2s cd)"],
    k_effects: ["사용시 전방으로 대쉬(쿨타임2.2초)"]
  },
  I0NH: {
    type: "artifact",
    color: "god",
    stats: {
      str: 6000,
      agi: 6000,
      int: 6000,
      armor: 1100,
      hp: 45000,
      shield: 55000
    },
    label: "Supreme God's Barrier",
    k_label: "최상급 신의 방벽"
  },
  I0NI: {
    type: "artifact",
    color: "god",
    stats: {
      str: 6000,
      agi: 6000,
      int: 6000,
      hp: 55000
    },
    label: "Supreme Life Wings of Destruction",
    k_label: "최상급 신의 생명의 날개",
    effects: [
      "When HP is below 40%, any damage taken will restore 100% of MAX HP",
      "On use restore 20% of MAX HP every second for 10 seconds (120s cd)"
    ],
    k_effects: [
      "생명력이 40%이하일때 즉사가 아닌 공격을받을면",
      "즉시 생명력 100%를 회복하며 10초간 초당 생명력 20% 회복 (쿨타임 120초)"
    ]
  },
  I0NJ: {
    type: "artifact",
    color: "god",
    stats: {
      str: 6000,
      agi: 6000,
      int: 6000,
      attack_speed: 150,
      movement_speed: 40
    },
    label: "Supreme God's Blue Wings",
    k_label: "최상급 신의 푸른 날개",
    effects: [
      "Allies have 45% movement speed and 150% attack speed increased",
      "Enemies have 30% movement speed and attack speed reduced",
      "Freeze nearby enemies on use, dealing 150000 + (STR + AGI + INT) x150 (180s cd)"
    ],
    k_effects: [
      "주변 적군 공이속 30%감소",
      "주변 아군 공속 150% 이속 45%증가",
      "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x150)(쿨타임 180초)"
    ]
  },
  I0NK: {
    type: "artifact",
    color: "god",
    stats: {
      str: 6000,
      agi: 6000,
      int: 6000,
      damage_increase: 75
    },
    label: "Supreme Wings of Destruction",
    k_label: "최상급 파멸의 날개"
  },
  I03F: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1200,
      int: 7000,
      damage_taken: 18,
      damage_increase: 100
    },
    label: "God's Amplifying Robes",
    k_label: "신의 증폭 로브"
  },
  I04A: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1300,
      int: 8000,
      damage_taken: 21,
      damage_increase: 115
    },
    label: "Supreme God's Amplifying Robes",
    k_label: "최상급 신의 증폭 로브"
  },
  I03G: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1500,
      int: 13000
    },
    label: "Supreme Robes of Trust",
    k_label: "최고급 투신의 로브"
  },
  I04I: {
    type: "material",
    color: "black",
    label: "God of Destruction Piece",
    k_label: "파멸의 신의 조각"
  },
  I04K: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      int: 13000
    },
    label: "Supreme Staff of Destruction",
    k_label: "최상급 파멸의 지팡이",
    effects: ["49% damage increase to nearby allies"],
    k_effects: ["주변아군 추가데미지 49%증가 오라 생성"]
  },
  I04N: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      int: 11000,
      damage_increase: 180,
      hp_consume: true
    },
    k_label: "파멸의 신의 계약",
    label: "Death God's Contract"
  },
  I04O: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      int: 13000,
      damage_increase: 200,
      hp_consume: true
    },
    k_label: "최상급 파멸의 신의 계약",
    label: "Supreme God's Contract"
  },
  I04P: {
    type: "accessory",
    color: "god",
    stats: {
      str: 6000,
      agi: 6000,
      int: 6000,
      mp: 45000,
      hp: 60000,
      movement_speed: 300,
      hp_regen: 4000
    },
    k_label: "최상급 정화의 신의 보석",
    label: "Supreme Purified Magic Jewel"
  },
  I0SU: {
    type: "accessory",
    color: "god",
    stats: {
      str: 7000,
      agi: 7000,
      int: 7000,
      mp: 50000,
      hp: 70000,
      movement_speed: 300,
      hp_regen: 4500
    },
    k_label: "차원의 보석",
    label: "Dimensional Magic Jewel"
  },
  I0H8: {
    type: "accessory",
    color: "god",
    stats: {
      str: 6000,
      agi: 6000,
      int: 6000,
      armor: 1100,
      movement_speed: 300,
      magic_resistance: 35
    },
    k_label: "최상급 정화의 신의 수호",
    label: "Supreme Guardian Ring"
  },
  I0SV: {
    type: "accessory",
    color: "god",
    stats: {
      str: 7000,
      agi: 7000,
      int: 7000,
      armor: 1200,
      movement_speed: 300,
      magic_resistance: 39
    },
    k_label: "차원의 수호",
    label: "Dimensional Guardian Ring"
  },
  I0NO: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1000,
      str: 3800,
      agi: 3800,
      int: 3800,
      vampiric: 40,
      hp: 30000
    },
    label: "Great Demon's Immortal Armor",
    k_label: "대악마의 불멸 갑옷"
  },
  I0NP: {
    type: "armor",
    color: "red",
    stats: {
      armor: 1000,
      str: 4400,
      agi: 4400,
      int: 4400,
      hp: 40000,
      vampiric: 47
    },
    label: "Immortal Chaos Armor",
    k_label: "대혼돈의 불멸 갑옷"
  },
  I0NQ: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1200,
      str: 5500,
      agi: 5500,
      int: 5500,
      hp: 50000,
      vampiric: 67
    },
    label: "Purified Immortal Armor",
    k_label: "정화된 불멸의 갑옷"
  },
  I0NR: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1300,
      str: 6000,
      agi: 6000,
      int: 6000,
      hp: 55000,
      vampiric: 82
    },
    label: "Supreme Purified Immortal Armor",
    k_label: "최상급 정화된 불멸의 갑옷"
  },
  I0NS: {
    type: "helmet",
    color: "red",
    stats: {
      armor: 1300,
      str: 2000,
      agi: 2000,
      int: 2000,
      extra_armor: 1000,
      extra_armor_cd: 20,
      extra_armor_range: 1000
    },
    label: "Great Devil's Ambition",
    k_label: "대악마의 패기"
  },
  I0NT: {
    type: "helmet",
    color: "red",
    stats: {
      armor: 1700,
      str: 2500,
      agi: 2500,
      int: 2500,
      extra_armor: 1500,
      extra_armor_cd: 18,
      extra_armor_range: 1000
    },
    label: "Chaos Ambition",
    k_label: "대혼돈의 패기",
    bugged: true
  },
  I0NU: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 2200,
      str: 3500,
      agi: 3500,
      int: 3500,
      extra_armor: 2000,
      extra_armor_cd: 15,
      extra_armor_range: 1500
    },
    label: "God's Ambition",
    k_label: "신의 패기"
  },
  I0NV: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 2600,
      str: 4000,
      agi: 4000,
      int: 4000,
      extra_armor: 2500,
      extra_armor_cd: 13,
      extra_armor_range: 1500
    },
    label: "Supreme God's Ambition",
    k_label: "최상급 신의 패기"
  },
  I0SZ: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 3000,
      str: 5000,
      agi: 5000,
      int: 5000,
      extra_armor: 3000,
      extra_armor_cd: 13,
      extra_armor_range: 1500
    },
    label: "Dimensional Ambition",
    k_label: "차원의 패기"
  },
  I0NW: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      str: 5000,
      agi: 5000,
      int: 5000,
      angra_dmg: 40
    },
    label: "Angel's Revenge",
    k_label: "대천사의 복수"
  },
  I0NX: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      str: 5300,
      agi: 5300,
      int: 5300,
      angra_dmg: 45
    },
    label: "Angel's Revenge +1",
    k_label: "대천사의 복수 +1"
  },
  I0NY: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      str: 5600,
      agi: 5600,
      int: 5600,
      angra_dmg: 50
    },
    label: "Angel's Revenge +2",
    k_label: "대천사의 복수 +2"
  },
  I0NZ: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      str: 6000,
      agi: 6000,
      int: 6000,
      angra_dmg: 55
    },
    label: "Angel's Revenge +3",
    k_label: "대천사의 복수 +3"
  },
  I0O0: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      str: 8500,
      agi: 8500,
      int: 8500,
      angra_dmg: 65
    },
    label: "God's Revenge",
    k_label: "신의 복수심"
  },
  I0O1: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      str: 9500,
      agi: 9500,
      int: 9500,
      angra_dmg: 75
    },
    label: "Supreme God's Revenge",
    k_label: "최상급 신의 복수심"
  },
  I0O2: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      str: 5000,
      agi: 5000,
      int: 5000,
      grasp: 6
    },
    label: "Angel's Wrath",
    k_label: "대천사의 천벌"
  },
  I0O3: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      str: 5300,
      agi: 5300,
      int: 5300,
      grasp: 7
    },
    label: "Angel's Wrath +1",
    k_label: "대천사의 천벌 +1"
  },
  I0O4: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      str: 5600,
      agi: 5600,
      int: 5600,
      grasp: 8
    },
    label: "Angel's Wrath +2",
    k_label: "대천사의 천벌 +2"
  },
  I0O5: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      str: 6000,
      agi: 6000,
      int: 6000,
      grasp: 9
    },
    label: "Angel's Wrath +3",
    k_label: "대천사의 천벌 +3"
  },
  I0O6: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      str: 9500,
      agi: 9500,
      int: 9500,
      grasp: 12
    },
    label: "Supreme God's Wrath",
    k_label: "최상급 신의 신벌"
  },
  I0O7: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      str: 8500,
      agi: 8500,
      int: 8500,
      grasp: 11
    },
    label: "God's Wrath",
    k_label: "신의 신벌"
  },
  I0OB: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2300,
      agi: 2300,
      int: 2300,
      damage_increase: 40
    },
    label: "Demon King Strike Rune",
    k_label: "마신왕의 일격룬"
  },
  I0RW: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2600,
      agi: 2600,
      int: 2600,
      damage_increase: 48
    },
    label: "Demon King★Liberation★Strike Rune",
    k_label: "★해방★마신왕의 일격룬"
  },
  I0OC: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2300,
      agi: 2300,
      int: 2300,
      hp: 45000
    },
    label: "Demon King Life Rune",
    k_label: "마신왕의 생명룬"
  },
  I0RU: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2600,
      agi: 2600,
      int: 2600,
      hp: 50000
    },
    label: "Demon King★Liberation★Life Rune",
    k_label: "★해방★마신왕의 생명룬"
  },
  I0OD: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2300,
      agi: 2300,
      int: 2300,
      mp: 30000
    },
    label: "Demon King Mana Rune",
    k_label: "마신왕의 마나룬"
  },
  I0RS: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2600,
      agi: 2600,
      int: 2600,
      mp: 35000
    },
    label: "Demon King★Liberation★Mana Rune",
    k_label: "★해방★마신왕의 마나룬"
  },
  I0OE: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2300,
      agi: 2300,
      int: 2300,
      movement_speed: 150,
      attack_speed: 200
    },
    label: "Demon King Speed Rune",
    k_label: "마신왕의 신속룬"
  },
  I0RV: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2800,
      agi: 2800,
      int: 2800,
      movement_speed: 150,
      attack_speed: 200
    },
    label: "Demon King★Liberation★Speed Rune",
    k_label: "★해방★마신왕의 신속룬"
  },
  I0OF: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2300,
      agi: 2300,
      int: 2300
    },
    label: "Demon King Vitality Potion",
    k_label: "마신왕의 포션",
    effects: ["On Use: Restore 60% of health (25s cd)"],
    k_effects: ["사용시 최대생명력 60%회복 (쿨타임 25초)"]
  },
  I0RZ: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2600,
      agi: 2600,
      int: 2600
    },
    label: "Demon King★Liberation★Vitality Potion",
    k_label: "★해방★마신왕의 포션",
    effects: ["On Use: Restore 65% of health (25s cd)"],
    k_effects: ["사용시 최대생명력 65%회복 (쿨타임 25초)"]
  },
  I0OG: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2300,
      agi: 2300,
      int: 2300
    },
    label: "Demon King Mana Potion",
    k_label: "마신왕의 마나포션",
    effects: ["On Use: Restore 60% of maximum mana (30s cd)"],
    k_effects: ["사용시 최대마나 60%회복 (쿨타임 30초)"]
  },
  I0RT: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2600,
      agi: 2600,
      int: 2600
    },
    label: "Demon King★Liberation★Mana Potion",
    k_label: "★해방★마신왕의 마나포션",
    effects: ["On Use: Restore 65% of maximum mana (25s cd)"],
    k_effects: ["사용시 최대마나 65%회복 (쿨타임 25초)"]
  },
  I0OH: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2300,
      agi: 2300,
      int: 2300,
      stats_increase: 6
    },
    label: "Demon King Stat Rune",
    k_label: "마신왕의 증폭룬"
  },
  I0RY: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2600,
      agi: 2600,
      int: 2600,
      stats_increase: 7
    },
    label: "Demon King★Liberation★Stat Rune",
    k_label: "★해방★마신왕의 증폭룬"
  },
  I0OI: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2300,
      agi: 2300,
      int: 2300,
      skill_damage: 7
    },
    label: "Demon King Magic Rune",
    k_label: "마신왕의 증강룬"
  },
  I0RX: {
    type: "auxiliary",
    color: "god",
    stats: {
      str: 2600,
      agi: 2600,
      int: 2600,
      skill_damage: 8.5
    },
    label: "Demon King★Liberation★Magic Rune",
    k_label: "★해방★마신왕의 증강룬"
  },
  I0OJ: {
    type: "token",
    color: "god",
    stats: {
      int_increase: 6
    },
    label: "Demon King Token [Int]",
    k_label: "마신왕의 증표[지능]",
    effects: ["Only for the power of liberation"],
    k_effects: ["지능 10%증가"]
  },
  I0RQ: {
    type: "token",
    color: "god",
    stats: {
      int_increase: 7
    },
    label: "Demon King★Liberation★Token [Int]",
    k_label: "★해방★마신왕의 증표[지능]",
    effects: ["Only for the power of liberation"],
    k_effects: ["지능 10%증가"]
  },
  I0OK: {
    type: "token",
    color: "god",
    stats: {
      str_increase: 6
    },
    label: "Demon King Token [Str]",
    k_label: "마신왕의 증표[힘]",
    effects: ["Only for the power of liberation"],
    k_effects: ["지능 10%증가"]
  },
  I0RR: {
    type: "token",
    color: "god",
    stats: {
      str_increase: 7
    },
    label: "Demon King★Liberation★Token [Str]",
    k_label: "★해방★마신왕의 증표[힘]",
    effects: ["Only for the power of liberation"],
    k_effects: ["지능 10%증가"]
  },
  I0OL: {
    type: "token",
    color: "god",
    stats: {
      agi_increase: 6
    },
    label: "Demon King Token [Agi]",
    k_label: "마신왕의 증표[민첩]",
    effects: ["Only for the power of liberation"],
    k_effects: ["해방의 힘 전용템"]
  },
  I0RM: {
    type: "token",
    color: "god",
    stats: {
      agi_increase: 7
    },
    label: "Demon King★Liberation★Token [Agi]",
    k_label: "★해방★마신왕의 증표[민첩]",
    effects: ["Only for the power of liberation"],
    k_effects: ["해방의 힘 전용템"]
  },
  I0OM: {
    type: "token",
    color: "god",
    stats: {
      damage_increase: 30
    },
    label: "Demon King Token [Damage]",
    k_label: "마신왕의 증표[일격]",
    effects: ["Only for the power of liberation"],
    k_effects: ["해방의 힘 전용템"]
  },
  I0RO: {
    type: "token",
    color: "god",
    stats: {
      damage_increase: 38
    },
    label: "Demon King★Liberation★Token [Damage]",
    k_label: "★해방★마신왕의 증표[일격]",
    effects: ["Only for the power of liberation"],
    k_effects: ["해방의 힘 전용템"]
  },
  I0ON: {
    type: "token",
    color: "god",
    stats: {
      skill_damage: 8
    },
    label: "Demon King Token [Skill Damage]",
    k_label: "마신왕의 증표[증강]",
    effects: ["Only for the power of liberation"],
    k_effects: ["해방의 힘 전용템"]
  },
  I0RP: {
    type: "token",
    color: "god",
    stats: {
      skill_damage: 10
    },
    label: "Demon King★Liberation★Token [Skill Damage]",
    k_label: "★해방★마신왕의 증표[증강]",
    effects: ["Only for the power of liberation"],
    k_effects: ["해방의 힘 전용템"]
  },
  I0OO: {
    type: "token",
    color: "god",
    stats: {
      max_health: 6
    },
    label: "Demon King Token [HP]",
    k_label: "마신왕의 증표[생명]",
    effects: ["Only for the power of liberation"],
    k_effects: ["해방의 힘 전용템"]
  },
  I0RN: {
    type: "token",
    color: "god",
    stats: {
      max_health: 7
    },
    label: "Demon King★Liberation★Token [HP]",
    k_label: "★해방★마신왕의 증표[생명]",
    effects: ["Only for the power of liberation"],
    k_effects: ["해방의 힘 전용템"]
  },
  I0OP: {
    type: "token",
    color: "god",
    stats: {
      max_mana: 6
    },
    label: "Demon King Token [Mana]",
    k_label: "마신왕의 증표[마나]",
    effects: ["Only for the power of liberation"],
    k_effects: ["해방의 힘 전용템"]
  },
  I0RL: {
    type: "token",
    color: "god",
    stats: {
      max_mana: 7
    },
    label: "Demon King★Liberation★Token [Mana]",
    k_label: "★해방★마신왕의 증표[마나]",
    effects: ["Only for the power of liberation"],
    k_effects: ["해방의 힘 전용템"]
  },
  I0OQ: {
    label: "Demon King's Treasure Chest",
    k_label: "마신왕의 보물함",
    type: "chest",
    color: "black"
  },
  I0OS: {
    type: "material",
    color: "black",
    label: "Demon King Treasure Piece",
    k_label: "마신왕의 보물조각"
  },
  I0OT: {
    type: "material",
    color: "black",
    label: "Demon King Power",
    k_label: "마신왕의 권능"
  },
  I0OU: {
    type: "武器",
    color: "purple",
    stats: {
      int: 1800,
      atk: 30000,
      damage_increase: 15
    },
    label: "Wizard Staff",
    k_label: "위저드 지팡이"
  },
  I0OV: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      agi: 16000,
      hp: 190000
    },
    label: "Demon King Bow of Life",
    k_label: "마신왕의 생명력이 담긴 활",
    effects: [
      "Every 10 attacks will recover AGI x6.7 HP (9s cd)",
      "Every 6 spells will recover AGI x6.7 HP (10s cd)",
      "On Use: Restores AGI x10 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (AGI x6.7)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (AGI x6.7)(쿨타임 10초)",
      "사용시  생명력회복 (AGI x10)(쿨타임 120초)"
    ]
  },
  I0RB: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      agi: 18000,
      hp: 220000
    },
    label: "Demon King★Liberation★Bow of Life",
    k_label: "★해방★마신왕의 생명의 신궁",
    effects: [
      "Every 10 attacks will recover AGI x6.7 HP (9s cd)",
      "Every 6 spells will recover AGI x6.7 HP (10s cd)",
      "On Use: Restores AGI x10 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (AGI x6.7)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (AGI x6.7)(쿨타임 10초)",
      "사용시  생명력회복 (AGI x10)(쿨타임 120초)"
    ]
  },
  I0OW: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      agi: 16000,
      damage_taken: 60,
      damage_increase: 250
    },
    label: "Demon King Gauntlets",
    k_label: "마신왕의 건들릿"
  },
  I0QZ: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      agi: 18000,
      damage_taken: 66,
      damage_increase: 280
    },
    label: "Demon King★Liberation★Gauntlets",
    k_label: "★해방★마신왕의 건틀릿"
  },
  I0OX: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      int: 16000
    },
    label: "Demon Staff",
    k_label: "마신왕의 권좌",
    effects: [
      "Summons the highest level demons, inflicting (INT x 45) damage per hit"
    ],
    k_effects: [
      "사용시 최상위 마족을 소환하며, 매 타격마다 (지능 x 45)의 피해를 입힙니다"
    ]
  },
  I0R3: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      int: 18000
    },
    label: "Demon★Liberation★Staff",
    k_label: "★해방★마신왕의 권좌",
    effects: [
      "Summons the highest level demons, inflicting (INT x 47) damage per hit"
    ],
    k_effects: [
      "사용시 최상위 마족을 소환하며, 매 타격마다 (지능 x 47)의 피해를 입힙니다"
    ]
  },
  I0OY: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      agi: 16000,
      attack_speed: 300,
      attack_agi: true,
      attack_real: 99
    },
    label: "Demon King Dagger",
    k_label: "마신왕의 단검"
  },
  I0R4: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      agi: 18000,
      attack_speed: 300,
      attack_agi: true,
      attack_real: 110
    },
    label: "Demon King★Liberation★Dagger",
    k_label: "★해방★마신왕의 단검"
  },
  I0OZ: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      str: 16000,
      damage_increase: 120
    },
    label: "Demon King Great Sword",
    k_label: "마신왕의 대검"
  },
  I0R5: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      str: 18000,
      damage_increase: 135
    },
    label: "Demon King★Liberation★Great Sword",
    k_label: "★해방★마신왕의 대검"
  },
  I0P0: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      agi: 16000,
      damage_increase: 120
    },
    label: "Demon King Sword",
    k_label: "마신왕의 도검"
  },
  I0R6: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      agi: 18000,
      damage_increase: 135
    },
    label: "Demon King★Liberation★Sword",
    k_label: "★해방★마신왕의 도검"
  },
  I0P1: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      int: 16000,
      mp: 60000,
      contract: 0.0000065,
      int_tick: true
    },
    label: "Demon King Magic Staff",
    k_label: "마신왕의 마력 지팡이"
  },
  I0R7: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      int: 18000,
      mp: 65000,
      contract: 0.0000068,
      int_tick: true
    },
    label: "Demon King★Liberation★Magic Staff",
    k_label: "★해방★마신왕의 마력 지팡이"
  },
  I0P2: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      str: 11000,
      agi: 11000,
      int: 11000,
      angra_dmg: 90
    },
    label: "Demon King Revenge",
    k_label: "마신왕의 복수"
  },
  I0R8: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      str: 12000,
      agi: 12000,
      int: 12000,
      angra_dmg: 100
    },
    label: "Demon King★Liberation★Revenge",
    k_label: "★해방★마신왕의 복수"
  },
  I0P3: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      str: 16000,
      hp: 190000
    },
    label: "Demon King Sword of Life",
    k_label: "마신왕의 생명의 검",
    effects: [
      "Every 10 attacks will recover STR x6.7 HP (9s cd)",
      "Every 6 spells will recover STR x6.7 HP (10s cd)",
      "On Use: Restores STR x10 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (STR x6.7)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (STR x6.7)(쿨타임 10초)",
      "사용시  생명력회복 (STR x10)(쿨타임 120초)"
    ]
  },
  I0RA: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      str: 18000,
      hp: 220000
    },
    label: "Demon King★Liberation★Sword of Life",
    k_label: "★해방★마신왕의 생명의 검",
    effects: [
      "Every 10 attacks will recover STR x6.7 HP (9s cd)",
      "Every 6 spells will recover STR x6.7 HP (10s cd)",
      "On Use: Restores STR x10 HP (120s cd)"
    ],
    k_effects: [
      "기본공격 10회시 생명력회복 (STR x6.7)(쿨타임 9초)",
      "스킬사용 6회시 생명력회복 (STR x6.7)(쿨타임 10초)",
      "사용시  생명력회복 (STR x10)(쿨타임 120초)"
    ]
  },
  I0P4: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      str: 11000,
      agi: 11000,
      int: 11000,
      grasp: 15
    },
    label: "Demon King Punishment",
    k_label: "마신왕의 신벌"
  },
  I0RC: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      str: 12000,
      agi: 12000,
      int: 12000,
      grasp: 16
    },
    label: "Demon King★Liberation★Punishment",
    k_label: "★해방★마신왕의 신벌"
  },
  I0P5: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      int: 16000,
      int_tick: true,
      attack_int_real: 250
    },
    label: "Demon King Staff",
    k_label: "마신왕의 심판 지팡이"
  },
  I0RD: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      int: 18000,
      int_tick: true,
      attack_int_real: 265
    },
    label: "Demon King★Liberation★Staff",
    k_label: "★해방★마신왕의 심판 지팡이"
  },
  I0P6: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      str: 16000,
      attack_speed: 300,
      attack_str: true,
      attack_real: 100
    },
    label: "Demon King Judgment",
    k_label: "마신왕의 심판"
  },
  I0RE: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      str: 18000,
      attack_speed: 300,
      attack_str: true,
      attack_real: 115
    },
    label: "Demon King★Liberation★Judgment",
    k_label: "★해방★마신왕의 심판"
  },
  I0P7: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      str: 13000,
      int: 13000,
      int_tick: true,
      attack_str_int_real: 105
    },
    label: "Demon King Judgment Staff",
    k_label: "마신왕의 일격 지팡이"
  },
  I0RF: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      str: 15000,
      int: 15000,
      int_tick: true,
      attack_str_int_real: 125
    },
    label: "Demon King★Liberation★Judgment Staff",
    k_label: "★해방★마신왕의 일격 지팡이"
  },
  I0P8: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      str: 11000,
      agi: 11000,
      int: 11000
    },
    label: "Demon King Longsword",
    k_label: "마신왕의 검",
    effects: ["Deals 420000 + All Stats * 420 when used (120s cd)"],
    k_effects: ["사용시 신의 일격 시전 (쿨타임 120초)(420000 + 힘/민/지 * 420)"]
  },
  I0R0: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      str: 12000,
      agi: 12000,
      int: 12000
    },
    label: "Demon King★Liberation★Longsword",
    k_label: "★해방★마신왕의 검",
    effects: ["Deals 420000 + All Stats * 440 when used (120s cd)"],
    k_effects: ["사용시 신의 일격 시전 (쿨타임 120초)(420000 + 힘/민/지 * 440)"]
  },
  I0P9: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      int: 16000,
      damage_increase: 120
    },
    label: "Demon King Wizard Staff",
    k_label: "마신왕의 증폭 지팡이"
  },
  I0RI: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      int: 18000,
      damage_increase: 135
    },
    label: "Demon King★Liberation★Wizard Staff",
    k_label: "★해방★마신왕의 증폭 지팡이"
  },
  I0PA: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      int: 16000,
      damage_increase: 250,
      hp_consume: true
    },
    label: "Demon King Contract",
    k_label: "마신왕의 계약"
  },
  I0R2: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      int: 18000,
      damage_increase: 280,
      hp_consume: true
    },
    label: "Demon King★Liberation★Contract",
    k_label: "★해방★마신왕의 계약"
  },
  I0PB: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      str: 16000,
      str_increase: 30
    },
    label: "Demon King Amplifying Sword",
    k_label: "마신왕의 증폭검"
  },
  I0RH: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      str: 18000,
      str_increase: 33
    },
    label: "Demon King★Liberation★Amplifying Sword",
    k_label: "★해방★마신왕의 증폭검"
  },
  I0PC: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      agi: 16000,
      agi_increase: 30
    },
    label: "Demon King Amplifying Dagger",
    k_label: "마신왕의 증폭단검"
  },
  I0RJ: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      agi: 18000,
      agi_increase: 33
    },
    label: "Demon King★Liberation★Amplifying Dagger",
    k_label: "★해방★마신왕의 증폭단검"
  },
  I0PD: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      int: 16000,
      int_increase: 25
    },
    label: "Demon King Amplifying Staff",
    k_label: "마신왕의 지능 지팡이"
  },
  I0RK: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      int: 18000,
      int_increase: 27
    },
    label: "Demon King★Liberation★Amplifying Staff",
    k_label: "★해방★마신왕의 지능 지팡이"
  },
  I0PE: {
    label: "Demon King's Weapons",
    k_label: "마신왕의 무기함",
    type: "chest",
    color: "black"
  },
  I0OR: {
    label: "Sealed Demon King",
    k_label: "봉인된 마신왕",
    type: "chest",
    color: "black"
  },
  I0PF: {
    type: "武器",
    color: "red",
    stats: {
      atk: 230000,
      str: 6500,
      purgatory_damage: 80,
      purgatory_recovery: 15
    },
    label: "Archangel's Boundary",
    k_label: "대천사의 경계"
  },
  I0PG: {
    type: "武器",
    color: "red",
    stats: {
      atk: 260000,
      str: 7000,
      purgatory_damage: 90,
      purgatory_recovery: 17
    },
    label: "Archangel's Boundary +1",
    k_label: "대천사의 경계 +1"
  },
  I0PH: {
    type: "武器",
    color: "red",
    stats: {
      atk: 300000,
      str: 7500,
      purgatory_damage: 100,
      purgatory_recovery: 19
    },
    label: "Archangel's Boundary +2",
    k_label: "대천사의 경계 +2"
  },
  I0PI: {
    type: "武器",
    color: "red",
    stats: {
      atk: 350000,
      str: 8000,
      purgatory_damage: 110,
      purgatory_recovery: 21
    },
    label: "Archangel's Boundary +3",
    k_label: "대천사의 경계 +3"
  },
  I0PJ: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      str: 11000,
      purgatory_damage: 140,
      purgatory_recovery: 25
    },
    label: "God's Boundary",
    k_label: "신의 경계"
  },
  I0PK: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      str: 13000,
      purgatory_damage: 150,
      purgatory_recovery: 28
    },
    label: "Supreme God's Boundary",
    k_label: "최상급 신의 경계"
  },
  I0PL: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      str: 16000,
      purgatory_damage: 180,
      purgatory_recovery: 34
    },
    label: "Demon King's Boundary",
    k_label: "마신왕의 경계"
  },
  I0R1: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      str: 18000,
      purgatory_damage: 200,
      purgatory_recovery: 36
    },
    label: "Demon King★Liberation★Boundary",
    k_label: "★해방★마신왕의 경계"
  },
  I0PM: {
    type: "武器",
    color: "god",
    stats: {
      atk: 230000,
      str: 5000,
      agi: 5000,
      int: 5000,
      bamboo_damage: 600
    },
    label: "Archangel's Bamboo Spear",
    k_label: "대천사의 죽창"
  },
  I0PN: {
    type: "武器",
    color: "god",
    stats: {
      atk: 260000,
      str: 5300,
      agi: 5300,
      int: 5300,
      bamboo_damage: 660
    },
    label: "Archangel's Bamboo Spear +1",
    k_label: "대천사의 죽창 +1"
  },
  I0PO: {
    type: "武器",
    color: "god",
    stats: {
      atk: 300000,
      str: 5600,
      agi: 5600,
      int: 5600,
      bamboo_damage: 720
    },
    label: "Archangel's Bamboo Spear +2",
    k_label: "대천사의 죽창 +2"
  },
  I0PP: {
    type: "武器",
    color: "god",
    stats: {
      atk: 350000,
      str: 6000,
      agi: 6000,
      int: 6000,
      bamboo_damage: 800
    },
    label: "Archangel's Bamboo Spear +3",
    k_label: "대천사의 죽창 +3"
  },
  I0PQ: {
    type: "武器",
    color: "god",
    stats: {
      atk: 500000,
      str: 8500,
      agi: 8500,
      int: 8500,
      bamboo_damage: 1000
    },
    label: "God's Bamboo Spear",
    k_label: "신의 죽창"
  },
  I0PR: {
    type: "武器",
    color: "god",
    stats: {
      atk: 600000,
      str: 9500,
      agi: 9500,
      int: 9500,
      bamboo_damage: 1100
    },
    label: "Supreme God's Bamboo Spear",
    k_label: "최상급 신의 죽창"
  },
  I0PS: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      str: 11000,
      agi: 11000,
      int: 11000,
      bamboo_damage: 1300
    },
    label: "Demon King's Bamboo Spear",
    k_label: "마신왕의 죽창"
  },
  I0RG: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      str: 12000,
      agi: 12000,
      int: 12000,
      bamboo_damage: 1400
    },
    label: "Demon King's★Liberation★Bamboo Spear",
    k_label: "★해방★마신왕의 죽창"
  },
  I0PT: {
    type: "武器",
    color: "god",
    stats: {
      atk: 800000,
      int: 16000,
      hp: 190000
    },
    label: "Demon King's Life Staff",
    k_label: "마신왕의 생명 지팡이",
    effects: [
      "Every 4 spells will recover INT x7.5 HP (10s cd)",
      "On Use: Restore INT x12 HP of all allies within range(80s cd)"
    ],
    k_effects: [
      "스킬사용 4회시 생명력 회복 (INT x7.5)(쿨타임 10초)",
      "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x12)(쿨타임 80초)"
    ]
  },
  I0R9: {
    type: "武器",
    color: "god",
    stats: {
      atk: 1000000,
      int: 18000,
      hp: 220000
    },
    label: "Demon King's★Liberation★Life Staff",
    k_label: "★해방★마신왕의 생명 지팡이",
    effects: [
      "TODO",
      "Every 4 spells will recover INT x7.5 HP (10s cd)",
      "On Use: Restore INT x12 HP of all allies within range(80s cd)"
    ],
    k_effects: [
      "스킬사용 4회시 생명력 회복 (INT x7.5)(쿨타임 10초)",
      "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x12)(쿨타임 80초)"
    ]
  },
  I0KJ: {
    type: "chest",
    color: "red",
    label: "Devil's Soulstone (Small)",
    k_label: "작은 검은 영혼석",
    effects: ["Requires at least 3500 base stats for drop"],
    k_effects: ["드랍하려면 최소한 3500의 스탯이 필요하다."]
  },
  I0KL: {
    type: "chest",
    color: "red",
    label: "",
    k_label: "Archangel Treasure Chest (Small)",
    effects: ["Requires at least 3500 base stats for drop"],
    k_effects: ["드랍하려면 최소한 3500의 스탯이 필요하다."]
  },
  I0PU: {
    type: "stats",
    color: "darkred",
    stats_points: 24,
    label: "Spirit of destruction",
    k_label: "파멸의 신의 정기"
  },
  I0PV: {
    type: "stats",
    color: "darkred",
    stats_points: 26,
    label: "Spirit of purification",
    k_label: "정화의 신의 정기"
  },
  I0PY: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Magic Knight]",
    k_label: "해방된 힘 [마검사]",
    effects: ["The number of blows of uncontrollable anger increases by 6."],
    k_effects: ["주체할수 없는 분노의 타격수가 6회 증가합니다.(경직은 기존)"]
  },
  I0Q1: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1500,
      int: 11000,
      damage_taken: 30,
      damage_increase: 150
    },
    label: "Heavenly King Amplifying Robes",
    k_label: "천신왕의 증폭 로브"
  },
  I0SC: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1600,
      int: 12500,
      damage_taken: 35,
      damage_increase: 170
    },
    label: "Heavenly King★Liberation★Amplifying Robes",
    k_label: "★해방★천신왕의 증폭 로브"
  },
  I0Q2: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1500,
      int: 11000,
      mp: 80000,
      mps: 80
    },
    label: "Heavenly King Mana Robes",
    k_label: "천신왕의 마력 로브"
  },
  I0S2: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1600,
      int: 12500,
      mp: 90000,
      mps: 82
    },
    label: "Heavenly King★Liberation★Mana Robes",
    k_label: "★해방★천신왕의 마력 로브"
  },
  I0Q3: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1900,
      str: 11000,
      hp: 60000,
      movement_speed: 200,
      damage_increase: 90
    },
    label: "Heavenly King Bright Armor",
    k_label: "천신왕의 빛의 갑옷"
  },
  I0S5: {
    type: "armor",
    color: "god",
    stats: {
      armor: 2000,
      str: 12500,
      hp: 65000,
      movement_speed: 200,
      damage_increase: 105
    },
    label: "Heavenly King★Liberation★Bright Armor",
    k_label: "★해방★천신왕의 빛의 갑옷"
  },
  I0Q4: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1800,
      agi: 11000,
      hp: 60000,
      movement_speed: 200,
      damage_increase: 90
    },
    label: "Heavenly King Greaves",
    k_label: "천신왕의 빛의 경갑"
  },
  I0S6: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1900,
      agi: 12000,
      hp: 65000,
      movement_speed: 200,
      damage_increase: 105
    },
    label: "Heavenly King★Liberation★Greaves",
    k_label: "★해방★천신왕의 빛의 경갑"
  },
  I0Q5: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1500,
      int: 11000,
      hp: 60000,
      movement_speed: 200,
      damage_increase: 90
    },
    label: "Heavenly King Bright Robes",
    k_label: "천신왕의 빛의 로브"
  },
  I0S7: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1600,
      int: 12000,
      hp: 65000,
      movement_speed: 200,
      damage_increase: 105
    },
    label: "Heavenly King★Liberation★Bright Robes",
    k_label: "★해방★천신왕의 빛의 로브"
  },
  I0Q6: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1900,
      str: 11000,
      hp: 70000,
      damage_taken: -40
    },
    label: "Heavenly King Guardian Armor",
    k_label: "천신왕의 수호 갑옷"
  },
  I0S9: {
    type: "armor",
    color: "god",
    stats: {
      armor: 2000,
      str: 12500,
      hp: 80000,
      damage_taken: -43
    },
    label: "Heavenly King★Liberation★Guardian Armor",
    k_label: "★해방★천신왕의 수호 갑옷"
  },
  I0Q7: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1800,
      agi: 11000,
      hp: 70000,
      damage_taken: -40
    },
    label: "Heavenly King Guardian Greaves",
    k_label: "천신왕의 수호 경갑"
  },
  I0SA: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1900,
      agi: 12500,
      hp: 80000,
      damage_taken: -43
    },
    label: "Heavenly King★Liberation★Guardian Greaves",
    k_label: "★해방★천신왕의 수호 경갑"
  },
  I0Q8: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1500,
      int: 11000,
      hp: 70000,
      damage_taken: -40
    },
    label: "Heavenly King Guardian Robes",
    k_label: "천신왕의 수호 로브"
  },
  I0SB: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1600,
      int: 12500,
      hp: 80000,
      damage_taken: -43
    },
    label: "Heavenly King★Liberation★Guardian Robes",
    k_label: "★해방★천신왕의 수호 로브"
  },
  I0Q9: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1500,
      str: 8000,
      agi: 8000,
      int: 8000,
      hp: 70000,
      vampiric: 100
    },
    label: "Heavenly King Immortal Armor",
    k_label: "천신왕의 불멸의 갑옷"
  },
  I0S4: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1600,
      str: 9000,
      agi: 9000,
      int: 9000,
      hp: 80000,
      vampiric: 107
    },
    label: "Heavenly King★Liberation★Immortal Armor",
    k_label: "★해방★천신왕의 불멸의 갑옷"
  },
  I0QA: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1500,
      str: 8000,
      agi: 8000,
      int: 8000,
      hp: 70000,
      max_health: 45
    },
    label: "Heavenly King Life Armor",
    k_label: "천신왕의 생명의 갑옷"
  },
  I0S8: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1600,
      str: 9000,
      agi: 9000,
      int: 9000,
      hp: 80000,
      max_health: 48
    },
    label: "Heavenly King★Liberation★Life Armor",
    k_label: "★해방★천신왕의 생명의 갑옷"
  },
  I0QB: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1500,
      str: 8000,
      agi: 8000,
      int: 8000,
      hp: 70000,
      hp_regen_percent: 6.5
    },
    label: "Heavenly King Healing Armor",
    k_label: "천신왕 치유의 갑옷"
  },
  I0S1: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1600,
      str: 9000,
      agi: 9000,
      int: 9000,
      hp: 80000,
      hp_regen_percent: 7
    },
    label: "Heavenly King★Liberation★Healing Armor",
    k_label: "★해방★천신왕 치유의 갑옷"
  },
  I0QC: {
    type: "armor",
    color: "god",
    stats: {
      str: 11000,
      armor: 1900,
      hp: 70000,
      hp_regen: -5000,
      flame_armor: 90
    },
    label: "Heavenly King Flame Armor",
    k_label: "천신왕의 불꽃 갑옷"
  },
  I0S3: {
    type: "armor",
    color: "god",
    stats: {
      str: 12500,
      armor: 2000,
      hp: 80000,
      hp_regen: -5500,
      flame_armor: 95
    },
    label: "Heavenly King★Liberation★Flame Armor",
    k_label: "★해방★천신왕의 불꽃 갑옷"
  },
  I0QD: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1700,
      int: 17500
    },
    label: "Heavenly King Robes",
    k_label: "천신왕의 투기의 로브"
  },
  I0SD: {
    type: "armor",
    color: "god",
    stats: {
      armor: 1800,
      int: 20000
    },
    label: "Heavenly King★Liberation★Robes",
    k_label: "★해방★천신왕의 투기의 로브"
  },
  I0QF: {
    type: "chest",
    color: "black",
    label: "Heavenly King's Treasure Chest",
    k_label: "천신왕의 보물함"
  },
  I0QG: {
    type: "material",
    color: "black",
    label: "Heavenly King's Treasure Piece",
    k_label: "천신왕의 보물조각"
  },
  I0T8: {
    type: "material",
    color: "black",
    label: "Dimensional Piece",
    k_label: "차원의 조각"
  },
  I0T9: {
    type: "material",
    color: "black",
    label: "Dimensional Stone",
    k_label: "차원석"
  },
  I0O9: {
    type: "material",
    color: "black",
    label: "Go to the dimentional zone",
    k_label: "차원의 틈새로 이동",
    effects: ["Requires at least 11000 stats"],
    k_effects: ["기본 스텟의 합계가 11000이상"]
  },
  I0OA: {
    type: "material",
    color: "black",
    label: "God Item Disassemble",
    k_label: "신 아이템 분해"
  },
  I0O8: {
    type: "material",
    color: "black",
    label: "Demon King Summon",
    k_label: "마신왕 소환"
  },
  I0Q0: {
    type: "material",
    color: "black",
    label: "A glimmer of hope",
    k_label: "한줄기 희망"
  },
  I0QE: {
    label: "Sealed Heavenly King",
    k_label: "봉인된 천신왕",
    type: "chest",
    color: "black"
  },
  I0TA: {
    label: "Dimensional Treasure",
    k_label: "차원의 보물",
    type: "chest",
    color: "black"
  },
  I0TB: {
    label: "Dimensional Treasure Chest",
    k_label: "차원의 보물함",
    type: "chest",
    color: "black"
  },
  I0TI: {
    label: "Dimensional Treasure Chest 2",
    k_label: "차원의 보물함02",
    type: "chest",
    color: "black"
  },
  I0QH: {
    type: "artifact",
    color: "god",
    stats: {
      str: 7500,
      agi: 7500,
      int: 7500,
      attack_speed: 400,
      movement_speed: 200
    },
    label: "Heavenly King Boots",
    k_label: "천신왕의 각반",
    effects: ["On Use: Dash forward (2s cd)"],
    k_effects: ["사용시 전방으로 대쉬(쿨타임2초)"]
  },
  I0SE: {
    type: "artifact",
    color: "god",
    stats: {
      str: 8500,
      agi: 8500,
      int: 8500,
      attack_speed: 400,
      movement_speed: 200
    },
    label: "Heavenly King★Liberation★Boots",
    k_label: "★해방★천신왕의 각반",
    effects: ["On Use: Dash forward (1.8s cd)"],
    k_effects: ["사용시 전방으로 대쉬(쿨타임1.8초)"]
  },
  I0QI: {
    type: "artifact",
    color: "god",
    stats: {
      str: 7500,
      agi: 7500,
      int: 7500,
      hp: 60000,
      armor: 1300,
      shield: 70000
    },
    label: "Heavenly King Barrier",
    k_label: "천신왕의 방벽"
  },
  I0SG: {
    type: "artifact",
    color: "god",
    stats: {
      str: 8500,
      agi: 8500,
      int: 8500,
      hp: 70000,
      armor: 1400,
      shield: 80000
    },
    label: "Heavenly King★Liberation★Barrier",
    k_label: "★해방★천신왕의 방벽"
  },
  I0QJ: {
    type: "artifact",
    color: "god",
    stats: {
      str: 7500,
      agi: 7500,
      int: 7500,
      hp: 60000
    },
    label: "Heavenly King Life Wings",
    k_label: "천신왕의 생명 날개",
    effects: [
      "When HP is below 40%, any damage taken will restore 100% of MAX HP",
      "On use restore 30% of MAX HP every second for 10 seconds (120s cd)"
    ],
    k_effects: [
      "생명력이 40%이하일때 즉사가 아닌 공격을받을면",
      "즉시 생명력 100%를 회복하며 10초간 초당 생명력 30% 회복 (쿨타임 120초)"
    ]
  },
  I0SH: {
    type: "artifact",
    color: "god",
    stats: {
      str: 8500,
      agi: 8500,
      int: 8500,
      hp: 70000
    },
    label: "Heavenly King★Liberation★Life Wings",
    k_label: "★해방★천신왕의 생명 날개",
    effects: [
      "When HP is below 40%, any damage taken will restore 100% of MAX HP",
      "On use restore 30% of MAX HP every second for 10 seconds (110s cd)"
    ],
    k_effects: [
      "생명력이 40%이하일때 즉사가 아닌 공격을받을면",
      "즉시 생명력 100%를 회복하며 10초간 초당 생명력 30% 회복 (쿨타임 110초)"
    ]
  },
  I0QK: {
    type: "artifact",
    color: "god",
    stats: {
      str: 7500,
      agi: 7500,
      int: 7500
    },
    label: "Heavenly King Blue Wings",
    k_label: "천신왕의 푸른 날개",
    effects: [
      "Allies have 45% movement speed and 200% attack speed increased",
      "Enemies have 30% movement speed and attack speed reduced",
      "Freeze nearby enemies on use, dealing 150000 + (STR + AGI + INT) x200 (180s cd)"
    ],
    k_effects: [
      "주변 적군 공이속 30%감소",
      "주변 아군 공속 200% 이속 45%증가",
      "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x200)(쿨타임 180초)"
    ]
  },
  I0SI: {
    type: "artifact",
    color: "god",
    stats: {
      str: 8500,
      agi: 8500,
      int: 8500
    },
    label: "Heavenly King★Liberation★Blue Wings",
    k_label: "★해방★천신왕의 푸른 날개",
    effects: [
      "Allies have 50% movement speed and 220% attack speed increased",
      "Enemies have 30% movement speed and attack speed reduced",
      "Freeze nearby enemies on use, dealing 150000 + (STR + AGI + INT) x220 (180s cd)"
    ],
    k_effects: [
      "주변 적군 공이속 30%감소",
      "주변 아군 공속 220% 이속 50%증가",
      "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x220)(쿨타임 180초)"
    ]
  },
  I0QL: {
    type: "artifact",
    color: "god",
    stats: {
      str: 7500,
      agi: 7500,
      int: 7500,
      damage_increase: 90
    },
    label: "Heavenly King Wings",
    k_label: "천신왕의 날개"
  },
  I0SF: {
    type: "artifact",
    color: "god",
    stats: {
      str: 8500,
      agi: 8500,
      int: 8500,
      damage_increase: 100
    },
    label: "Heavenly King★Liberation★Wings",
    k_label: "★해방★천신왕의 날개"
  },
  I0QM: {
    label: "Heavenly King Treasure Chest",
    k_label: "천신왕의 보구함",
    type: "chest",
    color: "black"
  },
  I0QO: {
    type: "token",
    color: "god",
    stats: {
      str: 500,
      agi: 500,
      int: 500,
      attack_speed: 150,
      movement_speed: 150
    },
    label: "Book of transcendence [Speed]",
    k_label: "초월의 서 [신속함]",
    effects: ["A skill added to the platelet bag"],
    k_effects: ["혈소판 가방에 스킬이 추가됩니다"]
  },
  I0SL: {
    type: "token",
    color: "god",
    stats: {
      str: 1500,
      agi: 1500,
      int: 1500,
      attack_speed: 200,
      movement_speed: 150
    },
    label: "★Liberation★Book of transcendence [Speed]",
    k_label: "★해방★초월의 서 [신속함]",
    effects: ["A skill added to the platelet bag"],
    k_effects: ["혈소판 가방에 스킬이 추가됩니다"]
  },
  I0QP: {
    type: "token",
    color: "god",
    stats: {
      str: 500,
      agi: 500,
      int: 500,
      hp: 10000
    },
    label: "Book of transcendence [Endurance]",
    k_label: "초월의 서 [강인함]",
    effects: [
      "A skill added to the platelet bag",
      "100% magic reduction for 6s (120s cd)",
      "You cannot unlock items during cooldown when using a skill"
    ],
    k_effects: [
      "혈소판 가방에 스킬이 추가됩니다",
      "스킬 사용시 6초간 마법데미지 100%감소 (쿨타임 120초)",
      "스킬 사용시 쿨타임 동안 아이템을 해제할수없습니다"
    ]
  },
  I0SK: {
    type: "token",
    color: "god",
    stats: {
      str: 1000,
      agi: 1000,
      int: 1000,
      hp: 15000
    },
    label: "★Liberation★Book of transcendence [Endurance]",
    k_label: "★해방★초월의 서 [강인함]",
    effects: [
      "A skill added to the platelet bag",
      "100% magic reduction for 6.5s (120s cd)",
      "You cannot unlock items during cooldown when using a skill"
    ],
    k_effects: [
      "혈소판 가방에 스킬이 추가됩니다",
      "스킬 사용시 6.5초간 마법데미지 100%감소 (쿨타임 120초)",
      "스킬 사용시 쿨타임 동안 아이템을 해제할수없습니다"
    ]
  },
  I0QQ: {
    type: "token",
    color: "god",
    stats: {
      str: 500,
      agi: 500,
      int: 500,
      damage_increase: 10
    },
    label: "Book of transcendence [Power]",
    k_label: "초월의 서 [각성]",
    effects: [
      "A skill added to the platelet bag",
      "40% bonus damage for 15s (120s cd)",
      "You cannot unlock items during cooldown when using a skill"
    ],
    k_effects: [
      "혈소판 가방에 스킬이 추가됩니다",
      "스킬 사용시 15초간 추가데미지 40% 증가 (쿨타임 120초)",
      "스킬 사용시 쿨타임 동안 아이템을 해제할수없습니다"
    ]
  },
  I0SJ: {
    type: "token",
    color: "god",
    stats: {
      str: 1000,
      agi: 1000,
      int: 1000,
      damage_increase: 20
    },
    label: "★Liberation★Book of transcendence [Power]",
    k_label: "★해방★초월의 서 [각성]",
    effects: [
      "A skill added to the platelet bag",
      "45% bonus damage for 15s (120s cd)",
      "You cannot unlock items during cooldown when using a skill"
    ],
    k_effects: [
      "혈소판 가방에 스킬이 추가됩니다",
      "스킬 사용시 15초간 추가데미지 45% 증가 (쿨타임 120초)",
      "스킬 사용시 쿨타임 동안 아이템을 해제할수없습니다"
    ]
  },
  I0QR: {
    type: "token",
    color: "god",
    stats: {
      str: 650,
      agi: 650,
      int: 650
    },
    label: "Book of transcendence [Strike]",
    k_label: "초월의 서 [일격]",
    effects: [
      "A skill added to the platelet bag",
      "When using a skill, it inflicts powerful damage within a large range around the hero (proportional stats) (60s cd)",
      "You cannot unlock items during cooldown when using a skill"
    ],
    k_effects: [
      "혈소판 가방에 스킬이 추가됩니다",
      "스킬 사용시 영웅주변 큰범위내에 강력한 데미지를 가합니다. (스텟비례) (쿨타임 60초)",
      "스킬 사용시 쿨타임 동안 아이템을 해제할수없습니다"
    ]
  },
  I0SM: {
    type: "token",
    color: "god",
    stats: {
      str: 1500,
      agi: 1500,
      int: 1500
    },
    label: "★Liberation★Book of transcendence [Strike]",
    k_label: "★해방★초월의 서 [일격]",
    effects: [
      "A skill added to the platelet bag",
      "When using a skill, it inflicts powerful damage within a large range around the hero (proportional stats) (60s cd)",
      "You cannot unlock items during cooldown when using a skill"
    ],
    k_effects: [
      "혈소판 가방에 스킬이 추가됩니다",
      "스킬 사용시 영웅주변 큰범위내에 강력한 데미지를 가합니다. (스텟비례) (쿨타임 60초)",
      "스킬 사용시 쿨타임 동안 아이템을 해제할수없습니다"
    ]
  },
  I0QS: {
    type: "token",
    color: "god",
    stats: {
      str: 500,
      agi: 500,
      int: 500,
      hp: 10000
    },
    label: "Book of transcendence [Recovery]",
    k_label: "초월의 서 [회복]",
    effects: [
      "A skill added to the platelet bag",
      "When used, restores the hero's HP by 40% (20s cd)",
      "You cannot unlock items during cooldown when using a skill"
    ],
    k_effects: [
      "혈소판 가방에 스킬이 추가됩니다",
      "사용시 영웅의 체력을 40%회복시킵니다 (쿨타임 20초)",
      "스킬 사용시 쿨타임 동안 아이템을 해제할수없습니다"
    ]
  },
  I0SN: {
    type: "token",
    color: "god",
    stats: {
      str: 1000,
      agi: 1000,
      int: 1000,
      hp: 15000
    },
    label: "★Liberation★Book of transcendence [Recovery]",
    k_label: "★해방★초월의 서 [회복]",
    effects: [
      "A skill added to the platelet bag",
      "When used, restores the hero's HP by 45% (20s cd)",
      "You cannot unlock items during cooldown when using a skill"
    ],
    k_effects: [
      "혈소판 가방에 스킬이 추가됩니다",
      "사용시 영웅의 체력을 45%회복시킵니다 (쿨타임 20초)",
      "스킬 사용시 쿨타임 동안 아이템을 해제할수없습니다"
    ]
  },
  I0QT: {
    type: "artifact",
    color: "green",
    stats: {
      str: 200,
      agi: 200,
      int: 200,
      movement_speed: 150
    },
    label: "Watermelon",
    k_label: "수박",
    disabled: true
  },
  I0QU: {
    type: "artifact",
    color: "green",
    stats: {
      str: 700,
      agi: 700,
      int: 700,
      movement_speed: 150
    },
    label: "Delicious Watermelon",
    k_label: "맛있는 수박",
    disabled: true
  },
  I0QV: {
    type: "artifact",
    color: "purple",
    stats: {
      str: 1500,
      agi: 1500,
      int: 1500,
      movement_speed: 150
    },
    label: "Sweet and Delicious Watermelon",
    k_label: "달고 맛있는 수박",
    disabled: true
  },
  I0QN: {
    type: "material",
    color: "black",
    label: "Heavenly King power",
    k_label: "천신왕의 권능"
  },
  I0QW: {
    type: "material",
    color: "black",
    label: "Supreme God Weapon Essence",
    k_label: "최상급 신의 무기 정수"
  },
  I0QX: {
    type: "material",
    color: "black",
    label: "Supreme God Equipment Essence",
    k_label: "최상급 신의 장비 정수"
  },
  I0QY: {
    type: "material",
    color: "black",
    label: "Supreme God Accessory Essence",
    k_label: "최상급 신의 룬 정수"
  },
  I0LJ: {
    type: "unleash",
    color: "god",
    label: "Unleash Power [Escanor]",
    k_label: "해방된 힘 [에스카노르]",
    effects: ["Rhitta's Magical Power is increased by 1 every 2s"],
    k_effects: ["2초마다 신부 릿타의 마력이 1 증가합니다"]
  },
  I0T0: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1200,
      str: 5000,
      agi: 5000,
      int: 5000
    },
    effects: ["On use: 100% magic resistance for 14 seconds (90s cd)"],
    k_effects: ["사용시 14초간 마법면역(쿨타임 90초)"],
    label: "Dimensional Resistance Helmet",
    k_label: "차원의 결계"
  },
  I0T1: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1200,
      str: 5000,
      agi: 5000,
      int: 5000,
      damage_increase: 80
    },
    label: "Dimensional Light",
    k_label: "차원의의 빛"
  },
  I0T2: {
    type: "helmet",
    color: "god",
    stats: {
      armor: 1200,
      str: 5000,
      agi: 5000,
      int: 5000,
      damage_increase: 130,
      damage_taken: 45
    },
    label: "Dimensional Forbidden Force",
    k_label: "차원의 금단의 힘"
  },
  I0TC: {
    type: "slot",
    color: "god",
    stats: {
      str: 2000
    },
    label: "Dark Matter [Strength]",
    k_label: "암흑 물질[힘]"
  },
  I0TD: {
    type: "slot",
    color: "god",
    stats: {
      agi: 2000
    },
    label: "Dark Matter [Agility]",
    k_label: "암흑 물질[민첩]"
  },
  I0TE: {
    type: "slot",
    color: "god",
    stats: {
      int: 2000
    },
    label: "Dark Matter [Intelligence]",
    k_label: "암흑 물질[지능]"
  },
  I0TF: {
    type: "slot",
    color: "god",
    stats: {
      str: 1300,
      agi: 1300
    },
    label: "Dark Matter [Chaos]",
    k_label: "암흑 물질[혼돈]"
  },
  I0TG: {
    type: "slot",
    color: "god",
    stats: {
      str: 1300,
      int: 1300
    },
    label: "Dark Matter",
    k_label: "암흑의 물질"
  },
  I0TH: {
    type: "slot",
    color: "god",
    stats: {
      str: 1000,
      agi: 1000,
      int: 1000
    },
    label: "Dark Matter",
    k_label: "암흑의 물질"
  }
};

},{}],4:[function(require,module,exports){
let translator = require('./translations.js');
let translate = translator.translate;
let items = require('./itemdata.js');

class Item {
  constructor(item) {
    Object.assign(this, item);
  }
  
  html(qty, lang) {
    qty = qty || 1;
    let info = this.info(lang);
    let drops = this.dropsHtml();
    let txt = info + (info.trim() && drops.trim() ? "<br/>" : "") + drops;
    return `<span class="${this.color} item-tooltip" data-placement="bottom" data-toggle="tooltip" data-html="true" title="${txt}">${this.translatedLabel(lang) + (qty > 1 ? ' x' + qty : '')}</span>`;
  }
  
  info(lang) {
    let template = this.statsHtml();
    template += this.effectsHtml(lang);
    template += this.statsPointsHtml();
    template += (this.bugged ? translate('bugs') : '');
    
    return template.endsWith("<br/>") ? template.substring(0, template.lastIndexOf("<br/>")) : template;
  }
  
  statsHtml() {
    let txt =  "";
    
    if (this.stats) {
      txt += "<span class = 'capitalize'>"
      for (var stat in this.stats) {
        txt += this.formatStat(stat, this.stats[stat]) + '<br/>';
      }
      txt += "</span>"
    }
    
    return txt;
  }
  
  effectsHtml(lang) {
    let effects = this.translatedEffects(lang);
    return effects == null ? "" : effects.join("<br/>")
  }
  
  translatedEffects(lang) {
    return (lang || translator.lang()) == "eng" ? this.effects : this.k_effects;
  }
  
  translatedLabel(lang) {
    return (lang || translator.lang()) == "eng" ? this.label : this.k_label;
  }
  
  statsPointsHtml() {
    return this.stats_points == null ? "" : ("<br/>" + translate("gives") + " " + this.stats_points + " "  + translate("stats points"))
  }  
  
  dropsArray() {
    return this.drops === undefined ? [] : this.drops;
  }
  
  dropsHtml() {
    if (this.chest) {
      let drops = this.chest.drops.map(obj => ({item: items[obj.id], chance: obj.chance}));
      return "Drops<br/>" + drops.map(drop => `${drop.item.translatedLabel()} (${drop.chance} % ${translate('chance')})`).join("<br/>")
    }
    let groups = this.dropsArray().reduce((all, cur) => {
      let key = cur.chest.parent.translatedLabel() + cur.chance
      all[key] = (all[key] || {count: 0, drop: cur});
      all[key].count += 1
      return all;
    }, {});
    return Object.keys(groups).map(key => `${groups[key].drop.chest.parent.translatedLabel()} ${groups[key].count == 1 ? '' : 'x' + groups[key].count} (${groups[key].drop.chance} % ${translate('chance')})`).join("<br/>");
  }
  
  formatStat(stat, val) {
      if (stat == "atk") return translate("attack") + " : +" + val;
      else if (stat == "int") return translate("intelligence") + " : +" + val;
      else if (stat == "agi") return translate("agility") + " : +" + val;
      else if (stat == "str") return translate("strength") + " : +" + val;
      else if (stat == "damage_taken") return translate("damage taken") + " : " + (val >= 0 ? "+" : "") + val + "%";
      else if (stat == "attack_speed") return translate("attack speed") + " : +" + val + "%";
      else if (stat == "damage_increase") return translate("damage increase") + " : +" + val + "%";
      else if (stat == "hp") return translate("HP") + " : +"+val;
      else if (stat == "mp") return translate("MP") + " : +"+val;
      else if (stat == "movement_speed") return translate("movement speed") + " : +"+val+ "%";
      else if (stat == "hp_regen") return translate("HP regeneration") + " : +"+val + " " + translate("per second");
      else if (stat == "hp_regen_percent") return translate("HP regeneration") + ": +"+val + "% " + translate("max HP per second");
      else if (stat == "armor") return translate("armor") +" : +" +val;
      else if (stat == "max_health") return translate("max HP") + " : +" + val + "%";
      else if (stat == "enemy_armor") return translate("enemy armor") + " : " + val + "%"; 
      else if (stat == "enemy_speed") return translate("enemy speed") + " : " + val + "%";
      else if (stat == "magic_resistance") return translate("magic resistance") + " : +" + val + "%";
      else if (stat == "max_int") return translate("intelligence increase") + " : +" + val + "%";    
      else if (stat == "critical_hit") return this.stats["critical_hit_chance"] + '%' + translate('chance') + ' x' + val + " " + translate("critical hit")
      else if (stat == 'mps') return translate('mps-text').replace("{0}", 'x0.' + this.stats['mps'])
      else if (stat == 'attack_str') return translate('attack-str').replace("{0}", this.stats['attack_real'])
      else if (stat == 'attack_str_agi') return translate('attack-str-agi').replace("{0}", this.stats['attack_real'])
      else if (stat == 'attack_agi') return translate('attack-agi').replace("{0}", this.stats['attack_real'])
      else if (stat == 'attack_str_int_real') return translate('attack-str-int').replace("{0}", this.stats['attack_str_int_real'])
      else if (stat == 'contract') {
        return this.stats['contract'] < 0.001 ? translate('attack-mana').replace("{0}", this.stats['contract'] * 1000000) : translate('attack-contract').replace("{0}", this.stats['contract'] * 100)
      }
      else if (stat == 'attack_int_real') return translate('attack-int').replace("{0}", this.stats['attack_int_real'])
      else if (stat == 'hp_consume') return translate('hp-consume')
      else if (stat == 'vampiric') return translate('vampiric-effect').replace("{0}", val)
      else if (stat == 'extra_armor') return translate('extra-armor').replace("{0}", val).replace("{1}", this.stats['extra_armor_cd']).replace("{2}", this.stats['extra_armor_range'])
      else if (stat == 'angra_dmg') return translate('angra-effect').replace("{0}", val)
      else if (stat == 'grasp') return translate('grasp-effect').replace("{0}", val)
      else if (stat == 'skill_damage') return translate('skill-damage').replace("{0}", val)
      else if (stat == 'stats_increase') return translate('stats-increase').replace("{0}", val)
      else if (stat == 'str_increase') return translate('str-increase').replace("{0}", val)
      else if (stat == 'agi_increase') return translate('agi-increase').replace("{0}", val)
      else if (stat == 'int_increase') return translate('int-increase').replace("{0}", val)
      else if (stat == "max_mana") return translate("max-mana").replace("{0}", val)
      else if (stat == 'purgatory_damage') return translate("purgatory-effect").replace("{0}", val).replace("{1}", this.stats["purgatory_recovery"]);
      else if (stat == 'bamboo_damage') return translate("bamboo-spear-effect").replace("{0}", val);
      else if (stat == 'flame_weapon') return translate("flame-weapon-effect").replace("{0}", val);
      else if (stat == 'flame_armor') return translate("flame-armor-effect").replace("{0}", val);
      else if (stat == 'shield') return translate("shield").replace("{0}", val);
      else if (stat == 'recovery') return translate("recovery").replace("{0}", val);
      else if (stat == 'recovery_multiplier') return translate("recovery-use").replace("{0}", val).replace("{0}", this.stats["recovery_duration"]);
      else return ''  
  }
  
  materials() {
    return this.crafts ? this.crafts[0] : {items: []};
  }
  
  tree (qty) {
      qty = qty || this.materials().qty || 1;
      var materials = this.materials().items.reduce(function(all, current) {
          all[current] = all[current] || 0;
          all[current] += 1;
          return all;
        }, {});
      return {
        innerHTML : this.html(qty),
        children : Object.keys(materials).map(key => items[key].tree(materials[key]))
      }
    }
}

for (let id in items) {
  items[id] = new Item(items[id]);
  items[id].id = id; 
}

module.exports = items;


},{"./itemdata.js":3,"./translations.js":6}],5:[function(require,module,exports){
let chests = require('./drops.js').chests;
let crafts = require('./craftings.js').craftings;
let units = require('./units.js');
let items = require('./items.js');

crafts.forEach(craft => {
  if (items[craft.id] === undefined) console.log(craft.id);
  items[craft.id].crafts = items[craft.id].crafts || [];
  items[craft.id].crafts.push(craft);
});

chests.forEach(chest => {
  if (!chest.unit) {
    if(items[chest.id] === undefined) console.log(chest.id);
    items[chest.id].chest = chest;
    chest.parent = items[chest.id];
  } else {
    if(units[chest.id] === undefined) console.log(chest.id);
    units[chest.id].chest = chest;
    chest.parent = units[chest.id];
  }
  
  chest.drops.forEach(drop => {
    if (items[drop.id] === undefined) console.log(drop.id);
    items[drop.id].drops = items[drop.id].drops || [];
    items[drop.id].drops.push({chest: chest, chance: drop.chance});
  });  
});


let colortags = {"purple": "unique", "blue": "epic", "orange": "legendary", "red": "mythic", "god": "god"}

for (let id in items) {
  if (items[id].disabled && false) delete items[id];  
  else {
    let item = items[id];
      if (!item.tags) item.tags = [];
      if (colortags[item.color]) item.tags.push(colortags[item.color]);
      if (item.color == "red") {
        if (item.label.includes("+1")) item.tags.push("+1")
        else if (item.label.includes("+2")) item.tags.push("+2")
        else if (item.label.includes("+3")) item.tags.push("+3")
        else item.tags.push("+0")
      }
  }
}

let types = new Set()
let tags = new Set()

for (let id in items) {
  types.add(items[id].type);
  for (let tag of items[id].tags) {
    tags.add(tag.trim())
  }
}

types = Array.from(types);
tags = Array.from(tags);

module.exports = {items, chests, units, types, tags};
},{"./craftings.js":1,"./drops.js":2,"./items.js":4,"./units.js":7}],6:[function(require,module,exports){
exports.translations = {
  "350-tip" : {
    "eng": "Note that this guide is intended for levels 350+. Some items you might need to be up to level 400 before you can use them",
    "kor": "이 가이드는 레벨 350 이상을 대상으로합니다. 일부 아이템은 사용하기 전에 레벨을 400까지 올려야 할 수도 있습니다."
  },
  "back_main": {
    "eng": "Back to Main",
    "kor": "메인으로 돌아 가기"
  },
  "view_characters": {
    "eng": "View Characters",
    "kor": "캐릭터 보기"
  },
  "view_item_build": {
    "eng": "View Item Build",
    "kor": "추천 아이템 빌드 보기"
  },
  "create_custom_build" : {
    "eng": "Create Custom Build",
    "kor": "맞춤 빌드 만들기"
  },
  "back_characters": {
    "eng": "Back to Characters",
    "kor": "캐릭터로 돌아가기"
  },
  "save-to-account": {
    "eng": "Save to account",
    "kor": "계정에 저장"
  },
  "custom_build": {
    "eng": "Custom Build",
    "kor": "맞춤 빌드"
  },
  "add_build": {
    "eng": "Add to build",
    "kor": "빌드에 추가"
  },
  "new_versions": {
    "eng": "new versions have been released since you last visited the page",
    "kor": "마지막으로 페이지를 방문한 이후로 새 버전이 출시되었습니다."
  },
  "check_changes": {
    "eng": "Check changes",
    "kor": "변경 사항 확인"
  },
  "changes_on": {
    "eng": "Changes on version",
    "kor": "버전 변경"
  },
  "bugged": {
    "eng": "Amount of known bugged items: {0}",
    "kor": "알려진 버그가있는 항목 수 : {0}"
  },
  "released_on": {
    "eng": "released on",
    "kor": "발매일"
  },
  "changelog": {
    "eng": "Changelog",
    "kor": "변경 로그"
  },
  "view_changelog": {
    "eng": "View Changelog",
    "kor": "변경 내역보기"
  },
  "username": {
    "eng": "Username",
    "kor": "사용자 이름"
  },
  "password": {
    "eng": "Password",
    "kor": "암호"
  },
  "register": {
    "eng": "Register",
    "kor": "계정생성"
  },
  "login": {
    "eng": "Login",
    "kor": "로그인"
  },
  "bad-user": {
    "eng": "Wrong username",
    "kor": "잘못된 사용자 이름"
  },
  "bad-password": {
    "eng": "Wrong password",
    "kor": "잘못된 비밀번호"
  },
  "logout": {
    "eng": "Logout",
    "kor": "로그 아웃"
  },
  "get-url": {
    "eng": "Get URL",
    "kor": "URL 가져 오기"
  },
  "not-logged-in": {
    "eng": "Not logged in",
    "kor": "로그인하지 않았습니다"
  },
  "invalid-id": {
    "eng": "Invalid id",
    "kor": "잘못된 ID"
  },
  "my-builds": {
    "eng": "My Builds",
    "kor": "내 빌드"
  },
  "view": {
    "eng": "View",
    "kor": "보기"
  },
  "edit": {
    "eng": "Edit",
    "kor": "수정하기"
  },
  "confirm": {
    "eng": "Are you sure?",
    "kor": "확실합니까?"
  },
  "yes": {
    "eng": "Yes",
    "kor": "예"
  },
  "no": {
    "eng": "No",
    "kor": "아니"
  },
  "not-owner" : {
    "eng": "You are not the owner of this build",
    "kor": "이 빌드의 소유자가 아닙니다."
  },
  "enter-title": {
    "eng": "Enter title",
    "kor": "제목 입력"
  },
  "optional": {
    "eng": "(optional)",
    "kor": "(선택사항)"
  },
  "description": {
    "eng": "Description",
    "kor": "설명"
  },  
  "main": {
    "eng": "Main",
    "kor": "메인"
  },
  "switching": {
    "eng": "Situational",
    "kor": "스위칭"
  },
  "delete": {
    "eng": "Delete",
    "kor": "삭제"
  },
  "attack-str": {
    "eng" : "Each attack has a 12% chance to deal 30000 + STR x{0} bonus damage",
    "kor" : "기본공격시 일정확률로 대천사의 죽음의심판생성 (12% 기회 30000 + STR x{0})"
  },
  "attack-str-agi": {
    "eng": "Each attack has a 16% chance to deal 30000 + (STR + AGI) x{0} bonus damage",
    "kor": "공격시 확률적으로 빛의심판 발동 (16% 기회 30000 + (STR + AGI) x{0})"
  },
  "attack-agi": {
    "eng": "Each attack has 20% chance to deal 30000 + AGI x{0} bonus damage",
    "kor": "공격시 확률적으로 빛의심판 발동 (20% 기회 30000 + AGI x{0})"
  },
  "attack-str-int": {
    "eng": "Each spell has a 8% chance to deal 30000 + (STR + INT) x{0} bonus damage",
    "kor": "스킬공격에 확률적으로 죽음의 폭발발생 (8% 기회 30000 + (STR + INT) x{0})"
  },
  "attack-contract": {
    "eng": "Each spell consumes 4% of HP and MP adding {0}% bonus damage",
    "kor": "모든 능력사용시 체력과 마나 4% 소모 추가데미지 {0}% 증가"
  },
  "attack-int": {
    "eng": "Each spell has a 8% chance to deal 30000 + INT x42 bonus damage",
    "kor": "스킬의 모든히트에 확률적으로 빛의심판 발동(8% 기회 30000 + INT x42)"
  },
  "attack-mana": {
    "eng": "Generates Bonus Damage based on MAX MANA ({0}% per 10,000)<br/>Consumes 6% of MAX MANA per cast<br/>Will not work if below 15% MAX MANA",
    "kor": "사용자의 마나에 비례하여 추가데미지 생성 (비뮬 - 1만당 {0}%)<br/>스킬사용시 최대마력 6%감소<br/>마력이 15%이상 있을때 작동"
  },
  "vampiric-effect": {
    "eng": "Activate to get {0}% increased health during 20s<br/>(120s cd) (can't remove item during effect)",
    "kor": "사용 시 20초간 최대 생명력 +{0}%<br/>(쿨타임 120초)"
  },
  "extra-armor": {
    "eng": "When used, will get aggro of enemies in {2} range<br/>Grants an additional {0} armor for 10s ({1}s cd)",
    "kor": "사용시 범위 {2}내의 적군의 공격 대상이됩니다<br/>10초간 방어력 100이 증가합니다 (쿨타임 {1}초)"
  },
  "bamboo-spear-effect": {
    "eng": "Each attack has 10% chance to deal {0}% bonus damage",
    "kor": "공격시 10%확률로 추가데미지 {0}%"
  },
  "flame-weapon-effect": {
    "eng": "Deals 8000 + STR * {0} per second to nearby enemies",
    "kor": "초당 주변에 데미지 (8000 + STR * {0})"
  },
  "flame-armor-effect": {
    "eng": "Deals 20000 + STR * {0} per second to nearby enemies",
    "kor": "초당 주변에 데미지 (20000 + STR * {0})"
  },
  "angra-effect": {
    "eng": "Each basic attack or spell hit has a 2% chance to damage enemies in 1500 range<br/>Adds an additional {0}% Bonus Damage for 8s<br/>Does not Stack",
    "kor": "기본 공격시 2% 확률로 범위 1500내의 아군의 추가데미지 증가<br/>추가데미지 {0}% 증가 지속시간 8초<br/>버프가 중복되지 않습니다"
  },
  "purgatory-effect": {
    "eng": "When health falls below 50%, {0}% bonus damage<br/>{1}% damage hp recovery when above 50%",
    "kor": "생명력이 50% 이하일때<br/>추가데미지 {0}%증가<br/>생명력이 50%이상일때 받은데미지 {1}% 회복"
  },
  "shield": {
    "eng": "Generate a shield every 10 seconds that blocks up to {0} damage",
    "kor": "10초마다 {0}의 쉴드 생성"
  },
  "recovery": {
    "eng": "Allies within range gain {0} HP recovery per second",
    "kor": "범위내 아군 초당 생명력 회복 {0}"
  },
  "recovery-use": {
    "eng": "On Use: Recovers HP every second for {1} seconds (Allstats x {0})(120s cd)",
    "kor": "사용시 {1}초간 사용지점에 매초마다 정화의 신의 가호 발동(올스텟 x {0})(쿨타임 120초)"
  },
  "max-mana": {
    "eng": "Max mana increased by {0}%",
    "kor": "최대 마나 {0}%증가"
  },
  "grasp-effect": {
    "eng": "Damages enemies that attack the user (Allstats x {0})",
    "kor": "적에게 공격을 받을시 적에게 데미지를 가합니다 (올스텟 x {0})"
  },
  "skill-damage": {
    "eng": "Skill damage increased by {0}%",
    "kor": "마법데미지 {0}%증가"
  },
  "stats-increase": {
    "eng": "All stats increased by {0}%",
    "kor": "모든스텟 {0}%증가"
  },
  "str-increase": {
    "eng": "Str increased by {0}%",
    "kor": "힘 {0}%증"
  },
  "agi-increase": {
    "eng": "Agi increased by {0}%",
    "kor": "민첩 {0}%증가"
  },
  "int-increase": {
    "eng": "Int increased by {0}%",
    "kor": "지능 {0}%증"
  },
  "hp-consume": {
    "eng": "Each spell consumes 6% of HP",
    "kor": "모든 능력사용시 체력 6% 소모"
  },
  "bugs": {
    "eng": "this item has bugs",
    "kor": "이 아이템에는 버그가 있습니다"
  },
  "public": "공공의",
  "private": "은밀한",
  "pending": {
    "eng": "Waiting approval",
    "kor": "승인 대기중"
  },
  "request-public": {
    "eng": "Request go public",
    "kor": "대중에게 요청하십시오"
  },
  "invalid-action": {
    "eng": "Invalid action",
    "kor": "부적절한 행동"
  },
  "favorites": {
    "eng": "Favorites",
    "kor": "즐겨 찾기"
  },
  "mps-text": {
    "eng": "Creates a shield that blocks max mana {0} every 10s. Does not stack",
    "kor": "10초마다 최대마나 {0}의 쉴드생성 (아이템끼리는 쉴드가 중첩되지 않습니다)"
  },
  "try-build": {
    "eng": "Try Build",
    "kor": "빌드 해보기"
  },
  "get-code": {
    "eng": "Get code",
    "kor": "코드를 얻다"
  },  
  "configuration": {
    "eng": "Configuration",
    "kor": "구성"
  },  
  "missing-code": {
    "eng": "Missing Code",
    "kor": "누락 된 코드"
  },  
  "revoke": {
    "eng": "Revoke approval",
    "kor": "승인 취소"
  },  
  "slot": {
    "eng": "Special Slot Item",
    "kor": "특수 슬롯 아이템"
  },
  "approve": "승인하다",
  "reject": "받지 않다",
  "status": "상태",
  "by": "by",  
  "items": "아이템",
  "characters": "캐릭터",
  "already exists": "이미 존재 함",
  'name': '이름',
  'type': '유형',
  'actions': '행위',
  'all': '모든',
  'weapon': '무기',
  'armor': '갑옷',
  'accessory': '악세서리',
  'helmet': '투구',
  'artifact': '아티팩트',
  'auxiliary': '보조장비',
  'material' : '재료',
  'stats': '스텟',
  'chest': '보물함',
  '+3': {
    "eng": "mythic +3",
    "kor": '신화 +3'
  },
  '+2': {
    "eng": "mythic +2",
    "kor": '신화 +2'
  },
  '+1': {
    "eng": "mythic +1",
    "kor": '신화 +1'
  },
  'mythic': {
    "eng": "mythic",
    "kor": '신화'
  },
  "+0": {
    "eng": "mythic +0",
    "kor": '신화 +0'    
  },
  "epic": {
    "eng": "epic",
    "kor": "에픽"
  },
  "legendary": {
    "eng": "legendary",
    "kor": "레전더리"
  },
  "skill": "기술",
  "unique": {
    "eng": "unique",
    "kor": "유니크"
  },
  "black": {
    "eng": "Other",
    "kor": "다른"
  },
  'attack': '공격력',
  'intelligence': '지능',
  'INT': '지능',
  'agility': '민첩',
  'AGI': '민첩',
  'strength': '힘',
  'STR': '힘',
  'damage taken': '받는데미지',
  'attack speed': '공격속도',
  'damage increase': '추가데미지',
  'movement speed': '이동속도 증가',
  'HP regeneration': 'HP 재건',
  'per second': '초당',
  'max HP per second': '초당 최대 생명',
  'max HP': '최대 체력',
  'enemy armor': '적의 갑옷',
  'enemy speed': '적의 속도',
  'magic resistance': '마법 저항력',
  'intelligence increase': '사 지능 증가',
  'gives': '주는',
  'stats points': '통계 점수',
  'build tree for': '에 대한 트리 만들기',
  'chance': '기회',
  'view build tree': '빌드 트리보기',
  'choose raid / boss / chest': '레이드 / 보스 / 보물함 선택',
  'item guide': '아이템 안내',
  "acerola": "블러드 로드",
  "hurk": "허크",
  "zero": "Zero",
  "shinobu": "오시노 시노부",
  "krul": "쿠루루 체페시",
  "roselinde": "빛의 수호자",
  "darkness": "라라티나",
  "enju": "아이하라 엔쥬",
  "shiki": "나나야 시키",
  "sinon": "시논",
  "mari": "마리",
  "ayase": "아라가키 아야세",
  "homura": "아케미 호무라",
  "scathach": "스카자하",
  "shinoa": "히이라기 시노아",
  "kanna": "칸나 카무이",
  "lawmaker": "법덕후",
  "megumin": "메구밍",
  "tatsumaki": "타츠마키",
  "pio": "피오",
  "mashiro": "시이나 마시로",
  "kaede": "카에데",
  "hayate": "야가미 하야테",
  "satsuki": "키류인 사츠키",
  "shuvi": "슈비",
  "nezuko": "카마도 네즈코",
  "escanor": "에스카노르",
  "taiga": "아이사카 타이가",
  "god": "신",
  "Unleash": "해방",
  "unleash": "해방",
  "HP": "HP",
  "MP": "MP",
  "critical hit": "크리티컬",
  "token": "증표"
}

exports.lang = function () {
  let config = exports.config
  return config && config.lang ? config.lang : "eng";
}

exports.translate = function (str, lang) {
  if (str == null) return str;
  lang = lang || exports.lang();
  
  if (Array.isArray(str) == false) {  
    if (!exports.translations[str]) {
      console.warn(str + ' does not have translation');
      return str;
    }
    
    if ((lang == 'eng' || lang == null) && typeof exports.translations[str] == 'string') return str;
    if (typeof exports.translations[str] == 'string') return exports.translations[str]; 

    return exports.translations[str][lang] || str;
  } else {
    return str.map(v => exports.translate(v))
  }
}

},{}],7:[function(require,module,exports){
let translator = require('./translations.js');

let units = {
  "n00G" : {
    "label": "Bloodthirsty Rabbit",
    "k_label": "광란한 핏빛 토끼"
  },
  "n002": {
    "label": "Lord of Talinn Forest",
    "k_label": "탈린 숲의 지배자"
  },
  "n00H": {
    "label": "Talinn Shore Rogue",
    "k_label": "탈린 기슭 도적단장"
  },
  "n010": {
    "label": "Kingdom’s Betrayer",
    "k_label": "배신한 기사단원 칼"
  },
  "n00B": {
    "label": "Snowy Bear",
    "k_label": "새하얀 털 곰"
  },
  "n00C": {
    "label": "Icy Heart",
    "k_label": "혹한의 설인"
  },
  "n00D": {
    "label": "Frosty Bear",
    "k_label": "푸른 털 곰"
  },
  "n00J": {
    "label": "Guardian of the Frigid Wasteland",
    "k_label": "혹한의 푸른 수호자"
  },
  "n00M": {
    "label": "Forest Tuskarr",
    "k_label": "나무망치 투스카르"
  },
  "n00L": {
    "label": "Queen of the Frigid Wasteland",
    "k_label": "혹한의 여왕 레엔"
  },
  "n009": {
    "label": "Ruler of the Plains",
    "k_label": "평원의 지배자"
  },
  "n00N": {
    "label": "Satyr",
    "k_label": "평원의 사티로스"
  },
  "n00P": {
    "label": "Blue Scale Murloc",
    "k_label": "시실리아 푸른비늘 은둔자"
  },
  "n00Q": {
    "label": "Purple Scale Murloc",
    "k_label": "시실리아 해저동굴 습격자"
  },
  "n00Y": {
    "label": "Giant Murloc",
    "k_label": "시실리나 푸른비늘 습격자"
  },
  "n00Z": {
    "label": "Deep-sea Guardian",
    "k_label": "심해의 수문장"
  },
  "n00V": {
    "label": "Lava Elemental",
    "k_label": "용암 괴인"
  },
  "n00W": {
    "label": "Lava Turtle",
    "k_label": "용암 거북"
  },
  "n006": {
    "label": "Magma Turtle",
    "k_label": "마그마 터틀"
  },
  "n013": {
    "label": "Fallen Hellfire Spirit",
    "k_label": "타락한 지옥불정령"
  },
  "n00R": {
    "label": "Winter Wolf",
    "k_label": "설산의 다이어 울프"
  },
  "n00S": {
    "label": "Mountain Spectre",
    "k_label": "설산의 망령"
  },
  "n00T": {
    "label": "Mountain Spectre",
    "k_label": "설산의 망령"
  },
  "n015": {
    "label": "Frostbite Hydra",
    "k_label": "서리의 새끼 히드라"
  },
  "n016": {
    "label": "Blue Dragon Knight",
    "k_label": "푸른 용군단 기사"
  },
  "n03R": {
    "label": "Deep Sea Robot",
    "k_label": "하급 수련 로봇"
  },
  "n03S": {
    "label": "Deep Sea Lord",
    "k_label": "하급 수련 관장"
  },
  "n03T": {
    "label": "Rabbit",
    "k_label": "라구 래빗"
  },
  "n04M": {
    "label": "Intermediate Training Center Knight",
    "k_label": "중급 수련 기사"
  },
  "n04N": {
    "label": "Intermediate Training Center Knight",
    "k_label": "중급 수련 관장"
  },
  "n04O": {
    "label": "Shinning Rabbit",
    "k_label": "빛나는 라구 래빗"
  },
  "n003": {
    "label": "Lord of Black Earth Beresa",
    "k_label": "검은 대지군주 베레스라"
  },
  "n01Y": {
    "label": "Blue Dragon",
    "k_label": "블루 드래곤"
  },
  "n05T": {
    "label": "",
    "k_label": ""
  },
  "n04I": {
    "label": "",
    "k_label": ""
  },
  "n04K": {
    "label": "",
    "k_label": ""
  },
  "n0DF": {
    "label": "",
    "k_label": ""
  },
  "n04B": {
    "label": "[Event] Chirno Low",
    "k_label": "[Event] 치르노 하급"
  },
  "n04C": {
    "label": "[Event] Chirno Middle",
    "k_label": "[Event] 치르노 중급"    
  },
  "n04D": {
    "label": "[Event] Chirno Advanced",
    "k_label": "[Event] 치르노 고급"      
  },
  "n04E": {
    "label": "[Event] Chirno Finest",
    "k_label": "[Event] 치르노 최고급"    
  },
  "n00X": {
    
  },
  "n019": {
    
  },
  "n01X": {
    
  },
  "n02B": {
    
  },
  "n02C": {
    
  },
  "n02D": {
    
  },
  "n022": {
    
  },
  "n023": {
    
  },
  "n024": {
    
  },
  "n02A": {
    
  },
  "e02J": {
    
  },
  "n00E": {
    
  },
  "n003": {
    
  },
  "n01Y": {
    
  },
  "e05T": {
    
  },
  "n027": {
    
  },
  "n02Y": {
    
  },
  "n03Z": {
    
  },
  "n04Q": {
    
  },
  "n04I": {
    
  },
  "e0DF": {
    
  },
  "n04K": {
    
  },
  "n051": {
    
  },
  "n059": {
    
  },
  "e0D8": {
    label: "Scheme",
    "k_label": "춈스케"
  },
  "n05B": {
    "label": "Easter Bunny",
    "k_label": "만렙 토끼"
  }, 
  "n05C": {
    "label": "Black Easter Bunny",
    "k_label": "흑화한 만렙 토끼"
  },
  "n05P": {
    "label": "Spirit King",
    "k_label": "마신왕"
  },
  "n025": {
    "label": "Archangel of Justice",
    "k_label": "정의의 대천사"
  },
  "n026": {
    "label": "Archangel of Death",
    "k_label": "죽음의 대천사"
  },
  "n02X": {
    "label": "Demon of Destruction",
    "k_label": "파괴의 대악마"
  },
  "n030": {
    "label": "Great Devil of Chaos(Open)",
    "k_label": "혼돈의 대악마(개방)"
  },
  "n05Z": {
    "label": "Pillar of Hope",
    "k_label": "희망의 기둥"
  },
  "n05Y": {
    "label": "Heavenly King",
    "k_label": "천신왕"
  },
  "n062": {
    "label": "Dimensional Barrage",
    "k_label": "차원 안정기"
  }
}

class Unit {
  constructor(unit) {
    Object.assign(this, unit);
  }
  
  translatedLabel() {
    return (translator.lang() == "eng" ? this.label : this.k_label) || "";
  }
}

for (let unit in units) {
  units[unit] = new Unit(units[unit]);
}


module.exports = units;

},{"./translations.js":6}],8:[function(require,module,exports){
let translator = require('../data/translations.js');
let items = require("../data/processed.js").items;
let chests = require('../data/processed.js').chests;
let types = require('../data/processed.js').types;
let tags = require('../data/processed.js').tags;

var columns = [];
let tagFilters = new Set();

$(document).on("language", function () {
    if ($("#table").length && window.itemArray === undefined) {
      itemArray = Object.values(items).filter(i => i.label);
      initializeRaids();
      initializeTable();
      $(".bugged").text(translator.translate('bugged').replace("{0}", itemArray.filter(i => i.bugged).length))
    }
});

function getFilteredData () {
  var filters = {};
  
  if ($("#table thead tr .type select").val() != "all") {  
    filters.type = $("#table thead tr .type select").val().toLowerCase()
  } 
  
  if ($(".raid").val()!= translator.translate("all")) {
    filters.raid = $(".raid").val().toLowerCase()
  }
  
  return itemArray.filter(function(item) {
     if (filters.type && item.type != filters.type) return false;
     if (tagFilters.size && item.tags.every(tag => tagFilters.has(tag) == false)) return false;
     if (filters.raid && item.dropsArray().every(d => d.chest.parent.translatedLabel().toLowerCase() != filters.raid)) return false;
     return !item.disabled;
  })
}

function initializeTable () {
  initializeColumns();
  $("#table").on("post-body.bs.table", function () {
    $('[data-toggle="tooltip"]').each(function(){
      $(this).tooltip({container: $(this)});
    })
  }).on("post-header.bs.table", function () {
    if($(this).find("thead tr .type select").length == 0) {
      $(this).find("thead tr .type").append("<div class = 'text-left'><select class = 'capitalize'>"+["all"].concat(types).map(v => "<option value='"+v+"'>"+translator.translate(v)+"</option>").join('')+"</select></div>").find("select").on("change", function () {
        $("#table").bootstrapTable("load", getFilteredData())
      })
    }
    if($(this).find("thead tr .name select").length == 0) {
      var options = [{l: translator.translate("all"), v: "all"}].concat(tags.map(c => ({l: translator.translate(c), v: c})).sort((a, b) =>  a.l.localeCompare(b.l)));
      $(this).find("thead tr .name").append("<div class = 'text-left'><select class='capitalize'>"+options.map(v => `<option class = '${v.v.split('-')[0]}' value='${v.v}'>${v.l}</option>`)+"</select></div>").find("select").on("change", function () {
        tagFilters.add($(this).val());
        refreshFilters();
      })
    }
  });

  $('#table').bootstrapTable({columns : columns, data : itemArray, sortName : "label", pagination : true, search : true, locale: translator.lang() == "kor" ? "kor" : "en"});
  
  $(".raid").change(function(){
    $("#table").bootstrapTable("load", getFilteredData())
  })  
  
  $(".fixed-table-toolbar").addClass("form-row").on("click", ".close", function(){
    let tag = $(this).closest(".tag").data("tag");
    tagFilters.delete(tag);
    refreshFilters();
    return false;
  });
  
  $(".search").addClass("col-3");
  refreshFilters();
}

function refreshFilters() {
  tagFilters.delete('all');
  
  $(".fixed-table-toolbar").children(".tags").remove();
  let tagsEl = $("<div class='tags col-9 my-auto'></div>");
  
  for (let tag of tagFilters) {
    tagsEl.append(`<span data-tag="${tag}" class="tag badge badge-pill badge-primary">
                    <span>${translator.translate(tag)}</span>
                    <button type="button" class="close" aria-label="Close">
                      <span class="close" aria-hidden="true">&times;</span>
                    </button>
                  </span>`);
  }
  
  $(".fixed-table-toolbar").prepend(tagsEl);  
  
  $("#table").bootstrapTable("load", getFilteredData())
}

function initializeColumns() {
  columns = [
    {
      field : translator.lang() == "eng" ? "label" : "k_label",
      title : translator.translate("name"),
      sortable : true,
      formatter : function (value, item) {
        return item.html();
      },
      class : "name capitalize"
    },
    {
      field : "type",
      title : translator.translate("type"),
      sortable : true,
      class : "capitalize type",
      formatter: val => translator.translate(val)
    },
    {
      field : "actions",
      title : translator.translate("actions"),
      formatter : function (value, item) {
        var html = "";

        if (page == "custom-build" && ["weapon", "armor", "accessory", "helmet", "artifact", "auxiliary", "unleash", "token", "slot"].indexOf(item.type) != -1) {
            html += `<button data-item="${item.id}" class = "btn btn-primary add-build">${translator.translate('add_build')}</button>`  
        }

        if (item.crafts) {
          html += `<button data-item="${item.id}" class = "btn btn-primary build-tree" data-toggle="modal" data-target="#item-tree-modal">${translator.translate('view build tree')}</button>`; 
        }

        return html;
      },
      class: "capitalize"
    },
    {
      field: "crafts",
      visible: false,
      formatter: function(val, item) {
        if (val) {
          return JSON.stringify(item.tree())
        }
      }
    },
    {
      field: "id",
      visible: false
    }
  ]
}


function initializeRaids () {
  let raids = new Set()  
  chests.forEach(chest => {
    if (chest.parent.translatedLabel()) {
      raids.add(chest.parent.translatedLabel().toLowerCase());
    }
  });
  
  $(".raid").append([translator.translate('all')].concat(Array.from(raids).sort()).map(v => $(`<option>`).text(v)));
}


},{"../data/processed.js":5,"../data/translations.js":6}],9:[function(require,module,exports){
let translate = require('../data/translations.js').translate;

$(function(){
  notifyNewChanges();
  setupChangeLanguage();
  
  $('[data-toggle=confirmation]').confirmation({
    rootSelector: '[data-toggle=confirmation]',
    btnOkLabel: translate("yes"),
    btnCancelLabel: translate("no")
    // other options
  });
  
})

function notifyNewChanges () {
  if (localStorage) {
    var lastVersion = localStorage.version;
    var currentVersion = config.version;

    if (lastVersion != null && currentVersion != lastVersion || (lastVersion == null && currentVersion == '1.4.3')) {
      var qty = 1;
      
      for (var i = 0; i < config.changeLog.length;i++) {
        if (config.changeLog[i].version == lastVersion) {
          qty = i;
          break;
        }
      }
      
      if (document.URL.includes("changelog") == false) {
        $(`<div class="alert alert-info text-center" role="alert">${qty} ${translate('new_versions')}. <a class = "btn btn-info" href = "/changelog">${translate('check_changes')}</a></div>`).prependTo('body').alert();
      }
      
      localStorage.version = currentVersion;
      
    }
  }
}

function setupChangeLanguage () {
  $(".language img").click(function(){
    if (config.lang != $(this).attr('class')) {
       window.location.href = window.location.href.replace(window.location.search, "") + "?lang=" + $(this).attr('class').replace("selected", "");
    }
  }) 

  $("." + config.lang).addClass('selected')
  
}
                              
function showError (err) {
  $("body").append(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      ${err}
                    </div>`)
}
},{"../data/translations.js":6}],10:[function(require,module,exports){
var main = {}
var switching = {}

$(document).on("click", ".add-build", function(){
  var item = $(this).data("item")
  addItem(item)
})

$(document).on("language", function () {
  window.items = window.client.items;
  if (window.data) {
    data.items.forEach(addItem);
    $("#title").val(data.title);
    $("#description").val(data.description);
  }
  init();
})

function addItem(item) {
  if (Object.keys(main).filter(v => items[v].type == items[item].type).length) {
    switching[item] = true  
  } else {
    main[item] = true;
  }
  refreshBuild()
}

function getTemplate (v) {
  return `<li data-item-id="${items[v].id}" data-item="${v}" class="list-group-item">
            ${items[v].html()}
            <button type="button" style="margin-left:10px" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </li>`
}

function refreshBuild() {
  $(".custom-build.main ul").empty().append(Object.keys(main).map(v => getTemplate(v)))
  $(".custom-build.switching ul").empty().append(Object.keys(switching).map(v => getTemplate(v)))
  $(".item-tooltip").tooltip({container: $('.custom-build'), placement: "bottom"});
  
  $(".close").click(function(){
    if ($(this).closest(".custom-build").hasClass("main")) {
      delete main[$(this).parent().data("item")];
    } else {
      delete switching[$(this).parent().data("item")];
    }
    refreshBuild();
  })
}

function init() {
  $(".get-url").click(function(){
    var ids = Object.keys(main).concat(Object.keys(switching)).map(v => items[v].id).join()
    var hash = btoa(ids)

    $(this).attr("href", hash)
  })

  $(".save-build").click(function(){
    var ids = Object.keys(main).concat(Object.keys(switching)).map(v => items[v].id)

    $(this).addClass("disabled").blur();

    fetch("/save-build", {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({items: ids, char: char, id: (window.data ? data._id : null), title: $("#title").val(), description: $("#description").val()})
    }).then(res=>res.json())
      .then(res => {
        if (res.error) {
          showError(res.error);
          $(".save-build").removeClass("disabled");
        } else {
          window.location.href = "/custom-build/" + res.id;
        }
      }).catch((err) => {
        showError(err);
        $(".save-build").removeClass("disabled")
      });

    return false;
  })
}
},{}],11:[function(require,module,exports){
window.client = window.client || {}
Object.assign(window.client, {
  items: require('../data/processed.js').items,
  translator: require('../data/translations.js')
});

module.exports = {}
},{"../data/processed.js":5,"../data/translations.js":6}],12:[function(require,module,exports){
let items = require('../data/processed.js').items;
let translate = require('../data/translations.js').translate;

var simple_chart_config = {
      chart: {
          container: "#item-tree",
          rootOrientation: "EAST",
          nodeAlign: "BOTTOM",
          connectors: {
            type: "step",
            style: {
              "stroke-width": 2
            }
          },
          levelSeparation:    45,
      },
      nodeStructure: null
  };

$(function(){
  $('#item-tree-modal').on('shown.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var item = items[button.data('item')] // Extract info from data-* attributes
    simple_chart_config.nodeStructure = item.tree();

    var modal = $(this);
    modal.find(".modal-title").html(`${translate("build tree for")} <span class = '${item.color}'>${item.label}</span>(${item.materials().chance + '%' + translate("chance")})`)
    new Treant(simple_chart_config);
    $('#item-tree-modal').find(".item-tooltip").tooltip({container: $('#item-tree-modal'), placement: "bottom"});
  })

  $(".item-tooltip").tooltip({placement: "bottom"});  
  
});

},{"../data/processed.js":5,"../data/translations.js":6}]},{},[9,8,12,11,10]);
