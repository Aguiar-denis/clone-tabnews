test("GET to /api/v1/status should return 200", async () => {
  const Response = await fetch("http://localhost:3000/api/v1/status");
  expect(Response.status).toBe(200);
});
