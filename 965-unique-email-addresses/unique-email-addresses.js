/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set=new Set()
    for(let email of emails){
        let [local, domain] = email.split("@");

        if(local.includes("+")){
            local=local.split("+")[0]
        }
        local=local.split(".").join("")
        set.add(local+"@"+domain)
    }
 return set.size
};