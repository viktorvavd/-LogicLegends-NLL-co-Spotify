--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

-- Started on 2023-06-19 11:33:49

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3346 (class 1262 OID 16398)
-- Name: spotify; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "spotify" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';


ALTER DATABASE "spotify" OWNER TO "postgres";

\connect "spotify"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3347 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA "public"; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA "public" IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = "heap";

--
-- TOC entry 216 (class 1259 OID 16422)
-- Name: answer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "public"."answer" (
    "id" integer NOT NULL,
    "id_question" integer NOT NULL,
    "answer" character varying NOT NULL,
    "c1" smallint NOT NULL,
    "c2" smallint NOT NULL,
    "c3" smallint NOT NULL,
    "c4" smallint NOT NULL,
    "c5" smallint NOT NULL
);


ALTER TABLE "public"."answer" OWNER TO "postgres";

--
-- TOC entry 217 (class 1259 OID 16436)
-- Name: final; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "public"."final" (
    "id" integer NOT NULL,
    "id_quest" integer NOT NULL,
    "text" character varying NOT NULL
);


ALTER TABLE "public"."final" OWNER TO "postgres";

--
-- TOC entry 214 (class 1259 OID 16400)
-- Name: quest; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "public"."quest" (
    "id" integer NOT NULL,
    "name" character varying NOT NULL
);


ALTER TABLE "public"."quest" OWNER TO "postgres";

--
-- TOC entry 215 (class 1259 OID 16409)
-- Name: question; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "public"."question" (
    "id" integer NOT NULL,
    "id_quest" integer NOT NULL,
    "question" character varying NOT NULL
);


ALTER TABLE "public"."question" OWNER TO "postgres";

--
-- TOC entry 3339 (class 0 OID 16422)
-- Dependencies: 216
-- Data for Name: answer; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (1, 1, 'Of course, many times', 1, 2, 3, 4, 5);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (2, 1, 'I''ve never been there', 2, 3, 4, 5, 1);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (3, 1, 'But my grandmother was born in 1905 on the corner of Staroportofrankivska and Velyka Arnautska streets.', 3, 4, 5, 1, 2);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (4, 1, 'Is it really noticeable?', 4, 5, 1, 2, 3);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (5, 2, 'Oh, don''t bother me, just let me listen to my records', 3, 1, 4, 2, 5);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (6, 2, 'There are two big differences!', 4, 1, 3, 5, 2);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (7, 2, 'It''s the same place after all', 5, 3, 2, 4, 1);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (8, 2, 'Do you want tickets to the floor or to the mezzanine?', 2, 3, 5, 1, 4);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (9, 3, 'Records. What do you have to say to me?', 3, 4, 1, 5, 2);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (10, 3, 'Mommy, give me a birth so I don''t have to hear this commercial anymore.', 2, 3, 5, 1, 4);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (11, 3, 'Benya Katz, a bumbler from the next door, is strumming his violin.', 1, 3, 4, 5, 2);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (12, 3, 'This is how I play it', 5, 2, 4, 1, 3);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (13, 4, 'I worked at a conservatory for 15 years. Why did you quit? The canned food was of poor quality...', 3, 5, 1, 4, 2);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (14, 4, 'Of course not! Of course not. But my son, yes! What do you mean "yes"? No', 4, 1, 5, 3, 2);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (15, 4, 'On the keys and other percussion instruments', 3, 5, 4, 2, 1);
INSERT INTO "public"."answer" ("id", "id_question", "answer", "c1", "c2", "c3", "c4", "c5") VALUES (16, 4, '"Every boy from a good family in Odesa should be able to play the violin." - mother', 3, 1, 5, 4, 2);


--
-- TOC entry 3340 (class 0 OID 16436)
-- Dependencies: 217
-- Data for Name: final; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."final" ("id", "id_quest", "text") VALUES (1, 1, 'Bach violin');
INSERT INTO "public"."final" ("id", "id_quest", "text") VALUES (2, 1, 'Beethoven''s drum');
INSERT INTO "public"."final" ("id", "id_quest", "text") VALUES (3, 1, 'An accordion by Chopin or Mozart');
INSERT INTO "public"."final" ("id", "id_quest", "text") VALUES (4, 1, 'Stradivarius guitar');
INSERT INTO "public"."final" ("id", "id_quest", "text") VALUES (5, 1, 'Tchaikovsky''s trumpet');


--
-- TOC entry 3337 (class 0 OID 16400)
-- Dependencies: 214
-- Data for Name: quest; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."quest" ("id", "name") VALUES (1, 'What instrument are you at the Summer Theater in Odesa?');
INSERT INTO "public"."quest" ("id", "name") VALUES (2, 'What kind of performer you are at the fair city 2023');
INSERT INTO "public"."quest" ("id", "name") VALUES (3, 'What kind of British band are you?');
INSERT INTO "public"."quest" ("id", "name") VALUES (4, 'What kind of musician are you in the band?');


--
-- TOC entry 3338 (class 0 OID 16409)
-- Dependencies: 215
-- Data for Name: question; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."question" ("id", "id_quest", "question") VALUES (1, 1, 'Have you ever been to Odesa?');
INSERT INTO "public"."question" ("id", "id_quest", "question") VALUES (2, 1, 'What is the difference between the Summer Theater and the Green Theater in Odesa?');
INSERT INTO "public"."question" ("id", "id_quest", "question") VALUES (3, 1, 'What do you listen to music on?');
INSERT INTO "public"."question" ("id", "id_quest", "question") VALUES (4, 1, 'Do you play a musical instrument?');


--
-- TOC entry 3189 (class 2606 OID 16428)
-- Name: answer answer_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."answer"
    ADD CONSTRAINT "answer_pk" PRIMARY KEY ("id");


--
-- TOC entry 3192 (class 2606 OID 16442)
-- Name: final finals_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."final"
    ADD CONSTRAINT "finals_pk" PRIMARY KEY ("id");


--
-- TOC entry 3185 (class 2606 OID 16407)
-- Name: quest quest_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."quest"
    ADD CONSTRAINT "quest_pk" PRIMARY KEY ("id");


--
-- TOC entry 3187 (class 2606 OID 16416)
-- Name: question question_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."question"
    ADD CONSTRAINT "question_pk" PRIMARY KEY ("id");


--
-- TOC entry 3190 (class 1259 OID 16443)
-- Name: finals_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "finals_id_uindex" ON "public"."final" USING "btree" ("id");


--
-- TOC entry 3194 (class 2606 OID 16429)
-- Name: answer answer_question_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."answer"
    ADD CONSTRAINT "answer_question_id_fk" FOREIGN KEY ("id_question") REFERENCES "public"."question"("id") ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3193 (class 2606 OID 16417)
-- Name: question question_quest_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "public"."question"
    ADD CONSTRAINT "question_quest_id_fk" FOREIGN KEY ("id_quest") REFERENCES "public"."quest"("id") ON UPDATE CASCADE ON DELETE RESTRICT;


-- Completed on 2023-06-19 11:33:49

--
-- PostgreSQL database dump complete
--

