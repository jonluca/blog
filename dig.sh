#!/bin/bash
query=""
for type in {A,AAAA,ALIAS,CNAME,MX,NS,PTR,SOA,SRV,TXT,DNSKEY,DS,NSEC,NSEC3,NSEC3PARAM,RRSIG,AFSDB,ATMA,CAA,CERT,DHCID,DNAME,HINFO,ISDN,LOC,MB,MG,MINFO,MR,NAPTR,NSAP,RP,RT,TLSA,X25};
do
	query="$query $type $1" 
done
dig +noall +short +noshort +answer $query 2>/dev/null