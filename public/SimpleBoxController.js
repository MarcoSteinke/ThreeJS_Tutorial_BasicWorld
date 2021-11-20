class SimpleBoxController {

    keymap = new Map()

    constructor() {

    }

    setActionForKey(key, action = function() {console.warn(`No action set for ${key}.`)}) {
        this.keymap.set(key, function() {return action});
    } 

    // TODO: Refactor
    applyKeysToWindow() {
        document.body.addEventListener("keypress", function(e) {
            e.preventDefault();
            if(e.key == 'w') {
              box.position.add(new THREE.Vector3(1,0,0));
            }
            if(e.key == 'a') {
              box.position.add(new THREE.Vector3(0,0,1));
            }
            if(e.key == 's') {
              box.position.add(new THREE.Vector3(-1,0,0));
            }
            if(e.key == 'd') {
              box.position.add(new THREE.Vector3(0,0,-1));
            }
            
          });
    }

    getActionForKey(key) {
        if([...this.keymap.keys()].includes(key))
            return this.keymap.get(key);
        else return null
    }
}