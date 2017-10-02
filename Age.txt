function GetAge(year, month, day)
{
	var now = new Date()	
	var age = now.getFullYear() - year
	var mdif = now.getMonth() - month + 1 //0=jan	
	
	if(mdif < 0)
	{
		--age
	}
	else if(mdif == 0)
	{
		var ddif = now.getDate() - day
		
		if(ddif < 0)
		{
			--age
		}
	}

	return age
}