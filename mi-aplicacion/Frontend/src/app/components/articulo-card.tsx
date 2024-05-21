'use client';

import { Image } from '@chakra-ui/next-js';
import { Card, CardBody, Divider, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export const ArticuloCard = ({ articulo }: any) => {
    const router = useRouter();

    return (
        <Card
        maxW="sm" onClick={() => {
            router.push(`/dashboard/articulo/${articulo.name}`);
        }}>
            <Image width={400} height={200} src={articulo} alt={articulo.name} borderRadius='lg' className='w-10 h-10'/>
            <Divider/>
            <CardBody>
                <Heading size="md">{articulo.name}</Heading>
            </CardBody>
        </Card>
    );
};