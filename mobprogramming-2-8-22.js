function jumpingOnClouds(c,k) {
  let energy = 100;
  let n = c.length;
  let i = 0;
  do {
      if(c[(i+k)%n]==1)
      energy-=2;
      energy-=1;
      i = (i+k)%n;
  } while (i !=0);
  
  return energy;
  }
  console.log(jumpingOnClouds([0,0,1,0,0,1,1,0],2));