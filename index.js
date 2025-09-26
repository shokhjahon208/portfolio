
// const canvas = document.getElementById('gridCanvas');
// const ctx = canvas.getContext('2d');

// // Canvas o'lchami
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Grid parametrlari
// const numPoints = 300; // Nuqtalar soni
// const points = [];
// let pointRadius = calculatePointRadius(); // Nuqta radiusi
// let maxLineDistance = calculateMaxLineDistance(); // Maksimal chiziq masofasi

// // Nuqta radiusini hisoblash funksiyasi
// function calculatePointRadius() {
//     return Math.max(3, Math.min(canvas.width, canvas.height) / 200); // Minimal radius = 3
// }

// // Maksimal chiziq masofasini hisoblash funksiyasi
// function calculateMaxLineDistance() {
//     return Math.min(canvas.width, canvas.height) / 5; // Masofani sahifa o'lchamiga bog'lash
// }

// // Tasodifiy nuqtalar yaratish funksiyasi
// function initializePoints() {
//     points.length = 0; // Eski nuqtalarni tozalash
//     for (let i = 0; i < numPoints; i++) {
//         points.push({
//             x: Math.random() * canvas.width,
//             y: Math.random() * canvas.height,
//             vx: (Math.random() - 0.5) * 2, // Harakat tezligi diversifikatsiya qilindi
//             vy: (Math.random() - 0.5) * 2,
//         });
//     }
// }

// // Kursor pozitsiyasi
// const cursor = { x: null, y: null };

// // Kursor harakatini kuzatish
// window.addEventListener('mousemove', (event) => {
//     cursor.x = event.clientX;
//     cursor.y = event.clientY;
// });

// // Nuqtalarni saqlash
// function saveGridState() {
//     const gridState = points.map((point) => ({
//         x: point.x,
//         y: point.y,
//         vx: point.vx,
//         vy: point.vy,
//     }));
//     localStorage.setItem('gridState', JSON.stringify(gridState));
// }

// // Nuqtalarni yuklash
// function loadGridState() {
//     const savedGridState = localStorage.getItem('gridState');
//     if (savedGridState) {
//         const gridState = JSON.parse(savedGridState);
//         points.length = 0;
//         gridState.forEach((point) => {
//             points.push({
//                 x: point.x,
//                 y: point.y,
//                 vx: point.vx,
//                 vy: point.vy,
//             });
//         });
//     } else {
//         initializePoints(); // Yangi nuqtalarni yaratish
//     }
// }

// // Gridni chizish funksiyasi
// function drawGrid() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Nuqtalarni yangilash va chizish
//     points.forEach((point) => {
//         point.x += point.vx;
//         point.y += point.vy;

//         // Chegaradan chiqmaslik uchun qaytarish
//         if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
//         if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

//         // Nuqta chizish
//         ctx.beginPath();
//         ctx.arc(point.x, point.y, pointRadius, 0, Math.PI * 2); // Dinamik radius
//         ctx.fillStyle = '#ffffff';
//         ctx.fill();
//         ctx.closePath();
//     });

//     // Nuqtalar orasidagi chiziqlarni chizish
//     for (let i = 0; i < points.length; i++) {
//         for (let j = i + 1; j < points.length; j++) {
//             const dx = points[i].x - points[j].x;
//             const dy = points[i].y - points[j].y;
//             const distance = Math.sqrt(dx * dx + dy * dy);

//             if (distance < maxLineDistance) { // Faqat yaqin masofadagi nuqtalar ulanadi
//                 ctx.beginPath();
//                 ctx.moveTo(points[i].x, points[i].y);
//                 ctx.lineTo(points[j].x, points[j].y);
//                 ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxLineDistance})`; // Chiziq rangining o'chishi
//                 ctx.stroke();
//                 ctx.closePath();
//             }
//         }

//         // Kursor va nuqtalar orasidagi chiziqlarni chizish
//         if (cursor.x !== null && cursor.y !== null) {
//             const dx = points[i].x - cursor.x;
//             const dy = points[i].y - cursor.y;
//             const distance = Math.sqrt(dx * dx + dy * dy);

//             if (distance < maxLineDistance) { // Faqat yaqin nuqtalar kursor bilan ulanadi
//                 ctx.beginPath();
//                 ctx.moveTo(cursor.x, cursor.y);
//                 ctx.lineTo(points[i].x, points[i].y);
//                 ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxLineDistance})`;
//                 ctx.stroke();
//                 ctx.closePath();
//             }
//         }
//     }
// }

// // Animatsiya qilish funksiyasi
// function animate() {
//     drawGrid();
//     requestAnimationFrame(animate);
// }

// // O'lcham o'zgarganda qayta yuklash
// window.addEventListener('resize', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     pointRadius = calculatePointRadius(); // Radiusni yangilash
//     maxLineDistance = calculateMaxLineDistance(); // Maksimal masofani yangilash
//     initializePoints(); // Nuqtalarni qayta o'rnatish
// });

// // Sahifa almashtirishdan oldin saqlash
// window.addEventListener('beforeunload', saveGridState);

// // Tarmoqni tiklash va animatsiyani boshlash
// loadGridState();
// animate();

 