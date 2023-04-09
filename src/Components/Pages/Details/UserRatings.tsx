export default function ratingToStars(rating: number | undefined): string {
    if (!rating) {
      return "";
    }
  
    const fullStars = Math.floor(rating);
    const halfStars = Math.round(rating - fullStars);
  
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push("★");
    }
  
    if (halfStars) {
      stars.push("★");
    }
  
    for (let i = stars.length; i < 5; i++) {
      stars.push("☆");
    }
  
    return stars.join("");
  }
  