(function (window) {
  'use strict'
  function myLibrary () {
    var myLibraryObject = {
      fullName: fullName
    }

    return myLibraryObject

    function fullName (firstName, lastName) {
      // eslint-disable-next-line
      return alert(firstName + ' ' + lastName + '!')
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = myLibrary()
  } else if (typeof (window.customWidget) === 'undefined') {
    window.customWidget = myLibrary()
  }
})(window)
