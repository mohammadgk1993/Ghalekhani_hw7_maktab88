let userData = merging(personData,additionalPersonData)

function merging(obj1,obj2) {
    return  obj1.map(item1 => new Object({...obj2.find(item2 => item1.uid == item2.uid),...item1}))
}

function read(userData) {
    return userData
}

function create(obj) {
    if (userData.some(item => item.uid == obj.uid)) {
        return 'this uid is already exist'
    }
    userData.push(obj)
}

function update(uid,position,city,firstname,lastname) {
    if (userData.every(item => item.uid == uid)) {
        return 'this uid is not exist'
    }
    let newObj = userData.find(item => item.uid == uid)
    newObj.position = position
    newObj.city = city
    newObj.firstName = firstname
    newObj.lastName = lastname

    userData.splice(userData.indexOf(userData.find(item => item.uid == uid)),1,newObj)
}

function remove(uid) {
    if (userData.every(item => item.uid == uid)) {
        return 'this uid is not exist'
    }
    userData.splice(userData.indexOf(userData.find(item => item.uid == uid)),1)
}