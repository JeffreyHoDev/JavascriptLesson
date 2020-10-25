// Encapsulation

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1
        return 'bomb'
    }
    setInterval(passTime, 1000)

    return {
        // launch: launch, // imagine this don't let people access 
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton(); // object
ohno.totalPeaceTime() // 0
// Copy these to google developer tool

// So closure gives us control, some data just dont want let people access to

