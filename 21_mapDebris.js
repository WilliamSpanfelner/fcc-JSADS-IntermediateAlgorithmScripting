// Map the Debris

/*
According to Kepler's Third Law, the orbital period T
of two point masses orbiting each other in a circular or elliptic orbit is:

T=2π * sqrt(a^3/μ)

    a - is the orbit's semi-major axis
    μ=GM - is the standard gravitational parameter
    G - is the gravitational constant,
    M - is the mass of the more massive body.

Return a new array that transforms the elements' 
average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', 
avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. 
The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM 
value of earth is 398600.4418 km^3 * s^(-2).
*/

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.reduce((acc, element) => {
        // Calculate the orbit's semi-major axis 'a'
        const a = element.avgAlt + earthRadius;
        // Calculate the orbital period T
        const T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
        acc.push({name: element.name, orbitalPeriod: Number(T.toFixed())});
        return acc;
    }, []);
  }
  
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]
));
//   console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
