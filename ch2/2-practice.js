class DogDoor {
  constructor () {
    this._open = false
  }

  open () {
    console.log('The dog door opens.')
    this._open = true
  }
  close () {
    console.log('The dog door closes.')
    this._open = false
  }
  isOpen () {
    return this._open
  }
}

class Windows {
  constructor () {
    this._open = false
  }

  open () {
    console.log('The windows open.')
    this._open = true
  }
  close () {
    console.log('The windows close.')
    this._open = false
  }
  isOpen () {
    return this._open
  }
}

class Password {
  constructor (password) {
    this._password = password
  }

  set password (newPassword) {
    this._password = newPassword
  }

  check (password) {
    if (password !== this._password) {
      return false
    } else {
      return true
    }
  }
}

class Keypad {
  constructor (door, windows, password) {
    this._door = door
    this._windows = windows
    this._password = password
    this._locked = false
  }

  changePassword (oldPassword, newPassword) {
    let message = {
      failure: 'Failure: wrong password.',
      success: 'Success: password accepted.',
      changed: 'Success: password changed.'
    }

    let entry = prompt('Enter old password.')
    while (!this._password.check(entry)) {
      console.log(message.failure)
      entry = prompt('Enter old password.')
    }
    var newEntry = prompt('Enter new password.')
    this._password.password = newEntry
    console.log(message.changed)
  }

  unlock () {
    let message = {
      failure: 'Failure: wrong password.',
      success: 'Success: password accepted.'
    }

    let entry = prompt('Enter the password.')
    while (!this._password.check(entry)) {
      console.log(message.failure)
      entry = prompt('Enter the password.')
    }
    console.log(message.success)
    this._locked = false
    this._door.open()
    this._windows.open()
  }

  lock () {
    let message = { failure: 'Failure: wrong password.' }

    let entry = prompt('Enter the password.')
    while (!this._password.check(entry)) {
      console.log(message.failure)
      entry = prompt('Enter the password.')
    }
    console.log(message.success)
    this._locked = true
    this._door.close()
    this._windows.close()
  }

  isLocked () {
    return this._locked
  }
}

class DogDoorSimulator {
  constructor () {
    this._door = new DogDoor()
  }
  static main () {
    let door = new DogDoor()
    let windows = new Windows()
    let password = new Password('1234')
    let keypad = new Keypad(door, windows, password)

    console.log('Kelly wants to change the password on the keypad.')
    keypad.changePassword()
    console.log('Fido barks to go outside...')
    console.log('Kelly enters the password on the keypad.')
    keypad.unlock()
    console.log('Fido has gone outside...')
    console.log('Fido\'s all done...')
    console.log('Fido\'s back inside...')
    console.log('Kelly enters the password on the keypad.')
    keypad.lock()
  }
}
