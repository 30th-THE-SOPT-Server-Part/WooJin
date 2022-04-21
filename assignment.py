### 124p
# 1.
# print("1번 문제")
# print(10 == 100)
# print(10 != 100)
# print(10 > 100)
# print(10 < 100)
# print(10 <= 100)
# print(10 >= 100)


# 2.
# print("2번 문제")

# print("case 1")
# x = 1
# if x > 4:
#     print("참입니다")

# print("case 2")
# x = 2
# if x > 4:
#     print("참입니다")

# print("case 3")
# x = 10
# if x > 4:
#     print("참입니다")


# 3.
# print("3번문제")
# print("""
# 1. 치킨 and 햄버거
# 2. H브랜드 and 10만원 이하
# 3. 65세 이상 or 5살 이하
# """)

# 4.
# a = float(input("> 1번째 숫자: "))
# b = float(input("> 2번째 숫자: "))
# print()

# if a > b:
#     print(f"처음 입력했던 {a}가 {b}보다 더 큽니다")
# if a < b:
#     print(f"두 번째로 입력했던 {a}가 {b}보다 더 큽니다")
# # 같은 경우 추가
# if a == b:
#     print(f"{a}와 {b}가 같습니다")

### 136p
# 1.
# print("1번 문제")
# print("case1 예상 : x > 4가 거짓이기 때문에 else문 실행. 12")
# x = 2
# y = 10
# if x > 4:
#     if y > 2:
#         print(x * y)
# else:
#     print(x + y)

# print("case2 예상 : x > 4가 거짓이기 때문에 else문 실행. 5")
# x = 1
# y = 4
# if x > 4:
#     if y > 2:
#         print(x * y)
# else:
#     print(x + y)

# print("case3 예상 : y > 2가 거짓이기 때문에 아무것도 출력하지 않음.")
# x = 10
# y = 2
# if x > 4:
#     if y > 2:
#         print(x * y)
# else:
#     print(x + y)

# 2.
# x = 15
# if x > 10:
#     if x < 20:
#         print("조건에 맞습니다.")

# if (x > 10) & (x < 20):
#     print("조건에 맞습니다.")

# 3.
# str_input = input("태어난 해를 입력해주세요> ")
# birth_year = int(str_input)

# if birth_year % 12 == 0:
#     print("원숭이 띠입니다.")
# elif birth_year % 12 == 1:
#     print("닭 띠입니다.")
# elif birth_year % 12 == 2:
#     print("개 띠입니다.")
# elif birth_year % 12 == 3:
#     print("돼지 띠입니다.")
# elif birth_year % 12 == 4:
#     print("쥐 띠입니다.")
# elif birth_year % 12 == 5:
#     print("소 띠입니다.")
# elif birth_year % 12 == 6:
#     print("범 띠입니다.")      
# elif birth_year % 12 == 7:
#     print("토끼 띠입니다.")
# elif birth_year % 12 == 8:
#     print("용 띠입니다.")
# elif birth_year % 12 == 9:
#     print("뱀 띠입니다.")
# elif birth_year % 12 == 10:
#     print("말 띠입니다.")
# elif birth_year % 12 == 11:
#     print("양 띠입니다.") 

### 157p
# 1.
# list_a = [0, 1, 2, 3, 4, 5, 6, 7]
# list_a.extend(list_a)
# print(list_a)

# list_a = [0, 1, 2, 3, 4, 5, 6, 7]
# list_a.append(10)
# print(list_a)

# list_a = [0, 1, 2, 3, 4, 5, 6, 7]
# list_a.insert(3, 0)
# print(list_a)

# list_a = [0, 1, 2, 3, 4, 5, 6, 7]
# list_a.remove(3)
# print(list_a)

# list_a = [0, 1, 2, 3, 4, 5, 6, 7]
# list_a.pop(3)
# print(list_a)

# list_a = [0, 1, 2, 3, 4, 5, 6, 7]
# list_a.clear()
# print(list_a)

# 2.
# numbers = [273, 103, 5, 32, 65, 9, 72, 800, 99]

# for number in numbers:
#     if number >= 100:
#         print("- 100 이상의 수:", number)

# 3-1.
# numbers = [273, 103, 5, 32, 65, 9, 72, 800, 99]
# for number in numbers:
#     if number % 2 == 0:
#         print(f"{number} 는 짝수입니다.")
#     else:
#         print(f"{number} 는 홀수입니다.")

# 3-2.
# from math import log10, floor
# numbers = [273, 103, 5, 32, 65, 9, 72, 800, 99]
# for number in numbers:
#     digit = floor(log10(number)) + 1
#     print(f"{number} 는 {digit} 자릿수입니다.")

# 4.
# list_of_list = [
#     [1, 2, 3],
#     [4, 5, 6, 7],
#     [8, 9],
# ]

# for list in list_of_list:
#     for i in list:
#         print(i)

# 5.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
output = [[], [], []]

for number in numbers:
    output[(number % 3) - 1].append(number)

print(output)