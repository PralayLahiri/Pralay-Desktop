# from cryptography.fernet import Fernet

# key = Fernet.generate_key()
# f = Fernet(key)

# print(f)

# print(key.decode())


# encrypted_data = f.encrypt(b"Pralay")
# print("encrypted_data",encrypted_data)

# if 'b"gAAAAABingg4WsupXJETr4qrkMggZRLlHtBgmLTA7RzlAsk4HGg1V0mw3SQp3SxBuPW5gJTHgKrRuZc5F3F9Cc7mcoKJfwcUpQ=="' == encrypted_data:
#     decrypted_data = f.decrypt(encrypted_data) # f is the variable that has the value of the key.
#     print("decrypted_data",decrypted_data)



# from cryptography.fernet import Fernet

# # we will be encryting the below string.
# message = "Pralay"

# # generate a key for encryptio and decryption
# # You can use fernet to generate
# # the key or use random key generator
# # here I'm using fernet to generate key

# key = Fernet.generate_key()

# # Instance the Fernet class with the key

# fernet = Fernet(key)

# # then use the Fernet class instance
# # to encrypt the string string must
# # be encoded to byte string before encryption
# encMessage = fernet.encrypt(message.encode())

# print("original string: ", message)
# print("encrypted string: ", encMessage)

# # decrypt the encrypted string with the
# # Fernet instance of the key,
# # that was used for encrypting the string
# # encoded byte string is returned by decrypt method,
# # so decode it to string with decode methods
# decMessage = fernet.decrypt(encMessage).decode()

# print("decrypted string: ", decMessage)







import hashlib

l = ["riyad", "onni", "arman"]

def check_user(h):
    for i in l:
        if h == hashlib.md5(i.encode('utf-8')).hexdigest():
            print(hashlib.md5(i.encode('utf-8')).hexdigest())
            return i


print(check_user(hashlib.md5(l[2].encode('utf-8')).hexdigest()))