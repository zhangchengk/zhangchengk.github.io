import groovy.json.JsonBuilder
import groovy.json.JsonSlurper
import groovy.json.JsonOutput

def body = "sourceID=BASEDOC&eventType=ADD_AFTER&tenantCode=xtikzjvp&id=datalake12e8b1a8-bc1c-49be-862f-7cd36fcf5d48&userObject=%7B%22doctype%22%3A%22staffbankacct%22%2C%22ext%22%3A%7B%22source%22%3A%22XlReIcNqurwg0WLA%22%7D%2C%22data%22%3A%7B%22personnelId%22%3A%222087513011818752%22%2C%22tenantId%22%3A%22xtikzjvp%22%2C%22userId%22%3A%227c042889-e226-4a30-ab49-5c999202721d%22%7D%2C%22model%22%3A%7B%22creator%22%3A%221838579e-6b2a-40e0-8c36-9d64817ba53c%22%2C%22lastflag%22%3Atrue%2C%22recordnum%22%3A0%2C%22accttype%22%3A%22BAT00001%22%2C%22bank%22%3A%222028068410757632%22%2C%22enable%22%3A1%2C%22staff_id%22%3A%222087513011818752%22%2C%22currency%22%3A%22G001ZM0000DEFAULTCURRENCT00000000001%22%2C%22bankname%22%3A%222028068467397888%22%2C%22creationtime%22%3A1629188343924%2C%22id%22%3A%222391873026855168%22%2C%22isdefault%22%3Atrue%2C%22account%22%3A%221212847923747833%22%2C%22ts%22%3A1629188343924%7D%2C%22operator%22%3A%22ADD_AFTER%22%2C%22option%22%3A%22updateBankAcctInfo%22%7D"
// Split body and remove unnecessary characters
def map = body.split('&').collectEntries{e->
    e.split('=').collect{ URLDecoder.decode(it, "UTF-8") }
}

// Processing the map to readable stuff
def prettyMap = new JsonBuilder(map['userObject']).toPrettyString()
// // Convert the pretty map into a json object
def slurper = new JsonSlurper()
def jsonObject = slurper.parseText(prettyMap)

println jsonObject

println jsonObject.doctype


