print("hello")
alex = float(input("masukan angka yang kamu mau = "))

bambang = (alex <= 0)
print(bambang)

satrio = (alex >= 5)
print(satrio)

purnomo = (alex <= 8)
print(purnomo)

sukiman = (alex >= 12)
print(sukiman)

hasil = ((bambang or satrio) and (purnomo or sukiman))
print("hasil = ",hasil)