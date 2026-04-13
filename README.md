# Reactivities

A full-stack social networking application built following Neil Cummings' Udemy course:
[Complete Guide to Building an App with .NET Core and React](https://www.udemy.com/course/complete-guide-to-building-an-app-with-net-core-and-react/)

Users can create and join events (similar to Meetup or Facebook Events), manage profiles,
follow other users, upload photos, and chat in real time.

---

## Tech Stack

**Backend**
- .NET 10 / ASP.NET Core Web API
- Entity Framework Core (ORM)
- ASP.NET Core Identity (authentication)
- SignalR (real-time communication)
- MediatR (mediator pattern)
- AutoMapper
- Clean Architecture + CQRS pattern

**Frontend**
- React 19 with TypeScript
- React Query + Axios
- MobX (state management)
- React Router (routing)

**Database**
- SQLite (development)
- PostgreSQL (production)

**Other**
- Cloudinary (image uploads)
- Docker (optional, for local Postgres)

---

## Architecture

This project follows **Clean Architecture** with a clear separation of concerns across four layers:
Solution/
├── API/              # Controllers, middleware, SignalR hubs
├── Application/      # CQRS handlers, business logic (MediatR)
├── Domain/           # Entities, core models
└── Persistence/      # EF Core DbContext, migrations

The **CQRS + Mediator pattern** separates read (Query) and write (Command) operations,
keeping business logic out of controllers and making the codebase easy to extend.

---

## Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download) (v10+)
- [Node.js](https://nodejs.org/) (LTS)
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/) (optional, for API testing)

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/kmfonagy/Reactivities
cd reactivities
```

### 2. Install backend dependencies

```bash
dotnet restore
```

### 3. Apply database migrations

```bash
dotnet ef migrations add InitialCreate -p Persistence -s API
dotnet ef database update -s API
```

### 4. Run the API

```bash
cd API
dotnet watch run
```

API will be available at `http://localhost:5001`

### 5. Install and run the React client

```bash
cd client-app
npm install
npm start
```

Client will be available at `http://localhost:3000`

---

## Environment Variables

Create an `appsettings.Development.json` in the `API` project (already gitignored) with the
following structure:

```json
{
  "Cloudinary": {
    "CloudName": "YOUR_CLOUD_NAME",
    "ApiKey": "YOUR_API_KEY",
    "ApiSecret": "YOUR_API_SECRET"
  },
  "TokenKey": "your-super-secret-jwt-key"
}
```

---

## Features

- User registration and login with JWT authentication
- Create, read, update, and delete activities
- Attend or host events
- Follow / unfollow other users
- Upload and manage profile photos via Cloudinary
- Real-time chat on activity pages via SignalR
- Paging, sorting, and filtering on activity feeds
- Responsive UI

---

## Course Reference

**Instructor:** Neil Cummings  
**Course:** [Complete Guide to Building an App with .NET Core and React](https://www.udemy.com/course/complete-guide-to-building-an-app-with-net-core-and-react/)  
**Rating:** 4.6 ⭐ (8,500+ ratings)