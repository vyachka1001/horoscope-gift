PGDMP         4                z            horoscope-gift #   12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)     14.2 (Ubuntu 14.2-1.pgdg20.04+1) ?    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16385    horoscope-gift    DATABASE     e   CREATE DATABASE "horoscope-gift" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
     DROP DATABASE "horoscope-gift";
             
   harvidston    false            �            1259    16439    basket-certificates    TABLE     �   CREATE TABLE public."basket-certificates" (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "basketId" integer,
    "certificateId" integer
);
 )   DROP TABLE public."basket-certificates";
       public         heap 
   harvidston    false            �            1259    16437    basket-certificates_id_seq    SEQUENCE     �   CREATE SEQUENCE public."basket-certificates_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."basket-certificates_id_seq";
       public       
   harvidston    false    209            �           0    0    basket-certificates_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."basket-certificates_id_seq" OWNED BY public."basket-certificates".id;
          public       
   harvidston    false    208            �            1259    16402    baskets    TABLE     �   CREATE TABLE public.baskets (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);
    DROP TABLE public.baskets;
       public         heap 
   harvidston    false            �            1259    16400    baskets_id_seq    SEQUENCE     �   CREATE SEQUENCE public.baskets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.baskets_id_seq;
       public       
   harvidston    false    205            �           0    0    baskets_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;
          public       
   harvidston    false    204            �            1259    16488 
   categories    TABLE     �   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" date,
    "updatedAt" date
);
    DROP TABLE public.categories;
       public         heap 
   harvidston    false            �            1259    16486    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public       
   harvidston    false    215            �           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public       
   harvidston    false    214            �            1259    16457    certificate-infos    TABLE     $  CREATE TABLE public."certificate-infos" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "certificateId" integer
);
 '   DROP TABLE public."certificate-infos";
       public         heap 
   harvidston    false            �            1259    16455    certificate-infos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."certificate-infos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."certificate-infos_id_seq";
       public       
   harvidston    false    211            �           0    0    certificate-infos_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."certificate-infos_id_seq" OWNED BY public."certificate-infos".id;
          public       
   harvidston    false    210            �            1259    16420    certificates    TABLE     K  CREATE TABLE public.certificates (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    img character varying(255) NOT NULL,
    rating integer DEFAULT 0,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "categoryId" integer
);
     DROP TABLE public.certificates;
       public         heap 
   harvidston    false            �            1259    16418    certificates_id_seq    SEQUENCE     �   CREATE SEQUENCE public.certificates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.certificates_id_seq;
       public       
   harvidston    false    207            �           0    0    certificates_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.certificates_id_seq OWNED BY public.certificates.id;
          public       
   harvidston    false    206            �            1259    16475    ratings    TABLE     �   CREATE TABLE public.ratings (
    id integer NOT NULL,
    rate integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "certificateId" integer
);
    DROP TABLE public.ratings;
       public         heap 
   harvidston    false            �            1259    16473    ratings_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.ratings_id_seq;
       public       
   harvidston    false    213            �           0    0    ratings_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;
          public       
   harvidston    false    212            �            1259    16388    users    TABLE     0  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap 
   harvidston    false            �            1259    16386    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public       
   harvidston    false    203            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public       
   harvidston    false    202            <           2604    16442    basket-certificates id    DEFAULT     �   ALTER TABLE ONLY public."basket-certificates" ALTER COLUMN id SET DEFAULT nextval('public."basket-certificates_id_seq"'::regclass);
 G   ALTER TABLE public."basket-certificates" ALTER COLUMN id DROP DEFAULT;
       public       
   harvidston    false    209    208    209            9           2604    16405 
   baskets id    DEFAULT     h   ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);
 9   ALTER TABLE public.baskets ALTER COLUMN id DROP DEFAULT;
       public       
   harvidston    false    205    204    205            ?           2604    16491    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public       
   harvidston    false    214    215    215            =           2604    16460    certificate-infos id    DEFAULT     �   ALTER TABLE ONLY public."certificate-infos" ALTER COLUMN id SET DEFAULT nextval('public."certificate-infos_id_seq"'::regclass);
 E   ALTER TABLE public."certificate-infos" ALTER COLUMN id DROP DEFAULT;
       public       
   harvidston    false    211    210    211            :           2604    16423    certificates id    DEFAULT     r   ALTER TABLE ONLY public.certificates ALTER COLUMN id SET DEFAULT nextval('public.certificates_id_seq'::regclass);
 >   ALTER TABLE public.certificates ALTER COLUMN id DROP DEFAULT;
       public       
   harvidston    false    207    206    207            >           2604    16478 
   ratings id    DEFAULT     h   ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);
 9   ALTER TABLE public.ratings ALTER COLUMN id DROP DEFAULT;
       public       
   harvidston    false    213    212    213            7           2604    16391    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public       
   harvidston    false    202    203    203            �          0    16439    basket-certificates 
   TABLE DATA           j   COPY public."basket-certificates" (id, "createdAt", "updatedAt", "basketId", "certificateId") FROM stdin;
    public       
   harvidston    false    209   �L       �          0    16402    baskets 
   TABLE DATA           I   COPY public.baskets (id, "createdAt", "updatedAt", "userId") FROM stdin;
    public       
   harvidston    false    205   �L       �          0    16488 
   categories 
   TABLE DATA           H   COPY public.categories (id, name, "createdAt", "updatedAt") FROM stdin;
    public       
   harvidston    false    215   M       �          0    16457    certificate-infos 
   TABLE DATA           p   COPY public."certificate-infos" (id, title, description, "createdAt", "updatedAt", "certificateId") FROM stdin;
    public       
   harvidston    false    211   �M       �          0    16420    certificates 
   TABLE DATA           l   COPY public.certificates (id, name, price, img, rating, "createdAt", "updatedAt", "categoryId") FROM stdin;
    public       
   harvidston    false    207   �M       �          0    16475    ratings 
   TABLE DATA           `   COPY public.ratings (id, rate, "createdAt", "updatedAt", "userId", "certificateId") FROM stdin;
    public       
   harvidston    false    213   !P       �          0    16388    users 
   TABLE DATA           T   COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
    public       
   harvidston    false    203   >P       �           0    0    basket-certificates_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."basket-certificates_id_seq"', 1, false);
          public       
   harvidston    false    208            �           0    0    baskets_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.baskets_id_seq', 1, false);
          public       
   harvidston    false    204            �           0    0    categories_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categories_id_seq', 7, true);
          public       
   harvidston    false    214            �           0    0    certificate-infos_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."certificate-infos_id_seq"', 1, false);
          public       
   harvidston    false    210            �           0    0    certificates_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.certificates_id_seq', 10, true);
          public       
   harvidston    false    206            �           0    0    ratings_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.ratings_id_seq', 1, false);
          public       
   harvidston    false    212            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public       
   harvidston    false    202            L           2606    16444 ,   basket-certificates basket-certificates_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."basket-certificates"
    ADD CONSTRAINT "basket-certificates_pkey" PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public."basket-certificates" DROP CONSTRAINT "basket-certificates_pkey";
       public         
   harvidston    false    209            E           2606    16407    baskets baskets_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.baskets DROP CONSTRAINT baskets_pkey;
       public         
   harvidston    false    205            T           2606    16495    categories categories_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_name_key;
       public         
   harvidston    false    215            V           2606    16493    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public         
   harvidston    false    215            N           2606    16465 (   certificate-infos certificate-infos_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public."certificate-infos"
    ADD CONSTRAINT "certificate-infos_pkey" PRIMARY KEY (id);
 V   ALTER TABLE ONLY public."certificate-infos" DROP CONSTRAINT "certificate-infos_pkey";
       public         
   harvidston    false    211            P           2606    16467 -   certificate-infos certificate-infos_title_key 
   CONSTRAINT     m   ALTER TABLE ONLY public."certificate-infos"
    ADD CONSTRAINT "certificate-infos_title_key" UNIQUE (title);
 [   ALTER TABLE ONLY public."certificate-infos" DROP CONSTRAINT "certificate-infos_title_key";
       public         
   harvidston    false    211            G           2606    16431 "   certificates certificates_name_key 
   CONSTRAINT     ]   ALTER TABLE ONLY public.certificates
    ADD CONSTRAINT certificates_name_key UNIQUE (name);
 L   ALTER TABLE ONLY public.certificates DROP CONSTRAINT certificates_name_key;
       public         
   harvidston    false    207            I           2606    16429    certificates certificates_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.certificates
    ADD CONSTRAINT certificates_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.certificates DROP CONSTRAINT certificates_pkey;
       public         
   harvidston    false    207            R           2606    16480    ratings ratings_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.ratings DROP CONSTRAINT ratings_pkey;
       public         
   harvidston    false    213            A           2606    16399    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public         
   harvidston    false    203            C           2606    16397    users users_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id, email);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         
   harvidston    false    203    203            J           1259    16501    fki_categotyIdFKcertificate    INDEX     ^   CREATE INDEX "fki_categotyIdFKcertificate" ON public.certificates USING btree ("categoryId");
 1   DROP INDEX public."fki_categotyIdFKcertificate";
       public         
   harvidston    false    207            X           2606    16445 5   basket-certificates basket-certificates_basketId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."basket-certificates"
    ADD CONSTRAINT "basket-certificates_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE SET NULL;
 c   ALTER TABLE ONLY public."basket-certificates" DROP CONSTRAINT "basket-certificates_basketId_fkey";
       public       
   harvidston    false    2885    205    209            Y           2606    16450 :   basket-certificates basket-certificates_certificateId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."basket-certificates"
    ADD CONSTRAINT "basket-certificates_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES public.certificates(id) ON UPDATE CASCADE ON DELETE SET NULL;
 h   ALTER TABLE ONLY public."basket-certificates" DROP CONSTRAINT "basket-certificates_certificateId_fkey";
       public       
   harvidston    false    209    207    2889            W           2606    16496 $   certificates categotyIdFKcertificate    FK CONSTRAINT     �   ALTER TABLE ONLY public.certificates
    ADD CONSTRAINT "categotyIdFKcertificate" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) NOT VALID;
 P   ALTER TABLE ONLY public.certificates DROP CONSTRAINT "categotyIdFKcertificate";
       public       
   harvidston    false    215    207    2902            Z           2606    16468 6   certificate-infos certificate-infos_certificateId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."certificate-infos"
    ADD CONSTRAINT "certificate-infos_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES public.certificates(id) ON UPDATE CASCADE ON DELETE SET NULL;
 d   ALTER TABLE ONLY public."certificate-infos" DROP CONSTRAINT "certificate-infos_certificateId_fkey";
       public       
   harvidston    false    207    2889    211            [           2606    16481 "   ratings ratings_certificateId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT "ratings_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES public.certificates(id) ON UPDATE CASCADE ON DELETE SET NULL;
 N   ALTER TABLE ONLY public.ratings DROP CONSTRAINT "ratings_certificateId_fkey";
       public       
   harvidston    false    213    2889    207            �      x������ � �      �      x������ � �      �   �   x���=B!�z9��3<���F-m6��	��]H�q��G;b7�73.�`���Yf��j��=�>y,�p�p(rK)ktB��|�.��)>��Y|�. s����3I�M0��ck8����\�u����XdҌ!��:WJ} ��L�      �      x������ � �      �   D  x�}�Mn�@���)�GeU�w{��ز��n~��2�D, e�$6,�d&	�\��F�= 4��e��]�_�}�-��5拊��	/��)���U!L���w�e@'~�"�i{�PvQ������ץԀ��ؠm�����P�OR��8�|���a�+&�mE+�̧�<��H?X��u��L9�E^к*v~����C�t���kU�Q���R4��F釄{�(U���c`S���niM7y1�#,��\֠m��6���2�`����k���е�����K]�׹�Hw�G�=���oح늶\Z�����<4���4�մ���G�(����#!�C
B�� ���+���;Ԩ���4}���	��6s�F���ċ�K��j��[:���,w���l�tDcdr�-����B'�ˣ�#j�G��$Sڂ�q�8p]�k�S6�׳��]�?4a-gC�{Z�f��5�C搧��6�{�N�εw�M5(�k��!ہ�J�}g���y�'3/�Ծ{���k�7\��Py�)S��0�ML齁>Y�"\u�(���R���!�d�guY��=�      �      x������ � �      �      x������ � �     