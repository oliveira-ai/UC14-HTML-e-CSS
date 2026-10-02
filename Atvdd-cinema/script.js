const PRICE = 32.90;

const occupiedSeats = new Set([

    2,
    5,
    8,
    13,
    17,
    19,
    24,
    28,
    34,
    37,
    42,
    46

]);

const selectedSeats = new Set();


const seatMap =
    document.getElementById("seatMap");


const selectedSeatsEl =
    document.getElementById("selectedSeats");


const ticketCountEl =
    document.getElementById("ticketCount");


const totalPriceEl =
    document.getElementById("totalPrice");


const clearBtn =
    document.getElementById("clearBtn");


const confirmBtn =
    document.getElementById("confirmBtn");


const message =
    document.getElementById("message");


function createSeats() {

    seatMap.innerHTML = "";

    for (let number = 1; number <= 50; number++) {

        const seat =
            document.createElement("button");

        seat.className = "seat";

        seat.textContent =
            String(number).padStart(2, "0");


        // Acessibilidade
        seat.setAttribute(
            "aria-label",
            `Assento ${number}`
        );


        if (occupiedSeats.has(number)) {

            seat.classList.add("occupied");

            seat.disabled = true;

            seat.title =
                "Assento ocupado";

        }


        else {

            seat.addEventListener(
                "click",
                () => toggleSeat(number, seat)
            );

        }

        seatMap.appendChild(seat);
    }
}


function toggleSeat(number, element) {

    message.textContent = "";


    if (selectedSeats.has(number)) {

        selectedSeats.delete(number);

        element.classList.remove("selected");

    }

    else {

        selectedSeats.add(number);

        element.classList.add("selected");

    }

    updateSummary();
}

function updateSummary() {

    const seats =
        [...selectedSeats].sort(
            (a, b) => a - b
        );

    const quantity =
        seats.length;

    const total =
        quantity * PRICE;

    selectedSeatsEl.textContent =
        quantity

        ? seats
            .map(
                n => String(n).padStart(2, "0")
            )
            .join("  •  ")

        : "Nenhum assento";

    ticketCountEl.textContent =
        quantity;


    totalPriceEl.textContent =
        total.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }
        );
}

clearBtn.addEventListener(
    "click",
    () => {

        selectedSeats.clear();

        document
            .querySelectorAll(".seat.selected")
            .forEach(seat => {

                seat.classList.remove(
                    "selected"
                );

            });

        message.textContent =
            "Seleção limpa.";

        updateSummary();

    }
);

confirmBtn.addEventListener(
    "click",
    () => {

        if (selectedSeats.size === 0) {

            message.textContent =
                "Selecione pelo menos um assento para continuar.";

            return;
        }

        const quantity =
            selectedSeats.size;


       
        const total =
            (quantity * PRICE)
            .toLocaleString(
                "pt-BR",
                {
                    style: "currency",
                    currency: "BRL"
                }
            );

        message.textContent =
            `Reserva iniciada: ${quantity} ingresso(s) — ${total}.`;

    }
);

createSeats();

updateSummary();