using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }
        
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        
        [Required]
        [RegularExpression("(?=.*[^A-Za-z])(?=.*[A-Z])(?=.*[a-z]).{4,}$", ErrorMessage = "Password must be complex")]
        public string Password { get; set; }
        
        [Required]
        public string UserName { get; set; }
    }
}