print("hello")
alex = float(input("masukan angka yang kamu mau = "))

bambang = (alex >= 0)
print(bambang)

satrio = (alex <= 5)
print(satrio)

purnomo = (alex >= 8)
print(purnomo)

sukiman = (alex <= 12)
print(sukiman)

hasil = ((bambang and satrio) or (purnomo and sukiman))
print("hasil = ",hasil)