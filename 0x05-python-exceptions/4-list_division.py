#!/usr/bin/python3
def list_division(my_list_1, my_list_2, list_length):
    result = []
    for i in range(0, list_length):
        divide = 0     #divide will always be 0 unless its reassigned a value in a block... but immedidatley control leaves that block, "divide" goes back to its original value of 0.
        try:
           divide = (my_list_1[i]) / (my_list_2[i])
        except(ValueError, TypeError):
            print("wrong type")
        except(ZeroDivisionError):
            print("division by 0")
        except(IndexError):
            print("out of range")
        finally:
            result.append(divide)
    return result



    """1.If the try block executes without raising an exception, the value of divide will not lose its value. It will retain the value assigned within the try block as long as the variable is still in scope. So, if divide is assigned a value of 5 within the try block and no exceptions occur, it will still be 5 after the try block.
    2.DIFFERENCE BETWEEN TRY, EXCEPT AND FINALLY
    Try: Imagine you're trying to do something, like riding your bike without falling. You want to attempt it, right? So, in your code, when you use try, it means you're attempting to do something that might have a problem or error.

    Except: Now, let's say you're riding your bike, and you fall off. That's not good, but you need to be prepared for it. So, when you use except, it's like having a plan for when things go wrong. It's your way of saying, "If something bad happens, here's what we should do instead."

    Finally: Sometimes, you want to do something no matter what, whether you succeed or fail. Think of it as your way of saying, "Regardless of what happens, I'm going to do this last thing.The finally block in Python is used to specify a piece of code that will always be executed, whether an exception occurs or not"""
