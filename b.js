/**
 * Diberikan sebuah object nodes yang berisi lima buah object yaitu node1, node2, node3, node4 dan node5.
 * Pada masing-masing object yang terdapat di nodes, terdapat key yob (year of birth).
 * Buatlah sebuah fungsi untuk menambahkan properti age (yearNow - yob) pada masing-masing object tersebut.
 * Setelah itu tampilkan object nodes di terminal dengan console.log().
 * Kalian diperbolehkan menambahkan properti-properti pembantu pada object, serta variable-variable pembantu seperlunya.
 * Hal yang tidak boleh digunakan:
 *   - Object.keys()
 *   - Syntax for...in seperti:
 *       for(const key in nodes)
 */
var nodes = {
    node1: {},
    node2: {},
    node3: {},
    node4: {},
    node5: {}
  }
  nodes.node1.name = 'Acong';
  nodes.node1.yob = 1980;
  nodes.node2.name = 'Djoko';
  nodes.node2.yob = 1990;
  nodes.node3.name = 'Sitorus';
  nodes.node3.yob = 1970;
  nodes.node4.name = 'Budi';
  nodes.node4.yob = 2001;
  nodes.node5.name = 'Hasyim';
  nodes.node5.yob = 2009;
  function setAge(inObj, yearNow) {
    // Ketikkan kode program kalian di sini
  }
  setAge(nodes, 2020);