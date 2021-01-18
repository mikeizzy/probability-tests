#Write your code below this line 👇
import math
def prime_checker(number):

    isPrime = False
    # lcm = None

    if number < 0:
        print(f"Unexpected number '{number}' is not a natural number.")
    else:
        if number == 0 or number == 1:
            lcm = number
        elif number == 2:
            isPrime = True
            lcm = 2
        elif number % 2 != 0:
            isPrime = True
            for odd in range(3, math.floor(number / 2), 2):
                # print(odd)
                if number % odd == 0:
                    isPrime = False
                    lcm = odd
                    break
        else:
            lcm = 2

        if isPrime:
            print("It's a prime number.")
        else:
            print(f"It's not a prime number.")
            print(f"Its Lowest-Common-Multiple is {lcm}.")
#Write your code above this line 👆
    
#Do NOT change any of the code below👇
n = int(input("Check this number: "))
prime_checker(number=n)

