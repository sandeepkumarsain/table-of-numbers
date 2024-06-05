
        function table()
        {
            let a = document.getElementById('input').value;
            let b = document.createElement('p');

            document.body.appendChild(b);

            b.innerHTML = "";

            for(let i = 1; i <= 10; i++)
            {
                b.innerHTML += a + " x " + i + " = " + (a * i) + "<br>";
            }
        }
    