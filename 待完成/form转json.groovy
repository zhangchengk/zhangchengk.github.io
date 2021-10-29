import org.apache.commons.io.IOUtils
import java.nio.charset.StandardCharsets
import groovy.json.JsonSlurper
import groovy.json.JsonOutput
import groovy.json.JsonBuilder

flowFile = session.get()
if(!flowFile)return
def body = ''
// Cast a closure with an inputStream parameter to InputStreamCallback
session.read(flowFile, {inputStream ->
  body = IOUtils.toString(inputStream, StandardCharsets.UTF_8)
 // Do something with body here
} as InputStreamCallback)

def map = body.split('&').collectEntries{e->
    e.split('=').collect{ URLDecoder.decode(it, "UTF-8") }
}
// Processing the map to readable stuff
def prettyMap = new JsonBuilder(map['userObject']).toPrettyString()
// // Convert the pretty map into a json object
def slurper = new JsonSlurper()
def jsonObject = slurper.parseText(prettyMap)

// Cast a closure with an outputStream parameter to OutputStreamCallback
flowFile = session.write(flowFile, {outputStream ->
  outputStream.write(jsonObject.toString().getBytes())
} as OutputStreamCallback)

flowFile = session.putAttribute(flowFile, 'mime.type', 'application/json')
session.transfer(flowFile, REL_SUCCESS)
