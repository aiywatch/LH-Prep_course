for n in 1..100
	if n % 15 == 0
		print "FizzBuzz "
	elsif n%3 == 0
		print "Fizz " 
	else
		print "#{n} "
	end
end