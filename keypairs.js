const _sodium = require('libsodium-wrappers');
const bodyParser = require('body-parser');
const express = require ('express');
const router = express.Router();



router.post('/', async(req, res)=>{
  
    await _sodium.ready;
    const sodium = _sodium;
//     // WRITE OTHER CODES HERE FOR SigningKeys
// const signing_key = sodium.crypto_sign_keypair();
// const signing_key_public_base64 = sodium.to_base64(signing_key.publicKey, _sodium.base64_variants.ORIGINAL);
// const signing_key_private_base64 = sodium.to_base64(signing_key.privateKey, _sodium.base64_variants.ORIGINAL);
// console.log("SigningPublicKey:   "+ signing_key_public_base64);
// console.log("SigningPrivateKey:   "+ signing_key_private_base64);
// console.log("\n")


// // WRITE OTHER CODES HERE FOR EncryptionKeys
// const encr_key = sodium.crypto_box_keypair();
// const encr_key_public_base64 = sodium.to_base64(encr_key.publicKey, _sodium.base64_variants.ORIGINAL);
// const encr_key_private_base64 = sodium.to_base64(encr_key.privateKey, _sodium.base64_variants.ORIGINAL);
// console.log("Enc_PublicKey:   "+ encr_key_public_base64);
// console.log("Enc_PrivateKey:   "+ encr_key_private_base64);

const generateKeyPair = async () => {
    
   
       // WRITE OTHER CODES HERE FOR SigningKeys
const signing_key = sodium.crypto_sign_keypair();
const signing_key_public_base64 = sodium.to_base64(signing_key.publicKey, _sodium.base64_variants.ORIGINAL);
const signing_key_private_base64 = sodium.to_base64(signing_key.privateKey, _sodium.base64_variants.ORIGINAL);
console.log("SigningPublicKey:   "+ signing_key_public_base64);
console.log("SigningPrivateKey:   "+ signing_key_private_base64);
console.log("\n")


// WRITE OTHER CODES HERE FOR EncryptionKeys
const encr_key = sodium.crypto_box_keypair();
const encr_key_public_base64 = sodium.to_base64(encr_key.publicKey, _sodium.base64_variants.ORIGINAL);
const encr_key_private_base64 = sodium.to_base64(encr_key.privateKey, _sodium.base64_variants.ORIGINAL);
console.log("Enc_PublicKey:   "+ encr_key_public_base64);
console.log("Enc_PrivateKey:   "+ encr_key_private_base64);

return "SigningPublicKey:   "+ signing_key_public_base64+"\nSigningPrivateKey:   " + signing_key_private_base64 +"\nEnc_PublicKey:   "+ encr_key_public_base64 +"\nEnc_PrivateKeys:   "+ encr_key_private_base64

}

const keysValues = await generateKeyPair();
   
    // console.log(keysValues);
    // res.send(headerval)
    res.status(200).send(keysValues)

})

module.exports=router;