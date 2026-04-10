// String 
// Title: Q3. Masking Personal Information 
// Problem Link: https://leetcode.com/problems/masking-personal-information/description/?envType=problem-list-v2&envId=dsa-sequence-valley-string 
// Difficulty: Medium
// Time O(n) Space O(n)

func maskPII(s string) string {
	_, err := strconv.Atoi(string(s[0]))
	if err != nil && (s[0] == '(' || s[0] == '+') || err == nil {
		numCount := 0
		for i := range s {
			c := s[i]
			if c >= '0' && c <= '9' {
				numCount++
			}
		}
		numDash := (numCount - 4) / 3
		countBeforeDash := (numCount - 4) % 3
		if countBeforeDash == 0 {
			countBeforeDash = 3
		} else {
			numDash++
		}
		var sb strings.Builder
		if numDash == 3 {
			sb.WriteByte('+')
		}
		for i := range s {
			c := s[i]
			if c >= '0' && c <= '9' {
				if numDash > 0 {
					sb.WriteByte('*')
					countBeforeDash--
				} else {
					sb.WriteByte(c)
				}
			}
			if countBeforeDash == 0 && numDash > 0 {
				sb.WriteByte('-')
				numDash--
				if numDash > 0 {
					countBeforeDash = 3
				}
			}
		}
		return sb.String()
	} else {
		atIndex := strings.IndexByte(s, '@')
		var sb strings.Builder
		sb.WriteByte(s[0])
		sb.WriteString("*****")
		sb.WriteString(s[atIndex-1 : len(s)])
		return strings.ToLower(sb.String())
	}
}
