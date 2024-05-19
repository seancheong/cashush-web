CREATE TABLE IF NOT EXISTS "subscribers_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"opt_in" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "subscribers_table_email_unique" UNIQUE("email")
);
